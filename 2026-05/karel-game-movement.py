from graphics import Canvas
import time
import math
import random

# Canvas and Game Loop Configurations
CANVAS_WIDTH = 400
CANVAS_HEIGHT = 300

KAREL = 'karel-mini.png'
KAREL_ENEMY = 'karel-mini.png'

# Sizes
KAREL_ENEMY_WIDTH = 16
KAREL_ENEMY_HEIGHT = 16
KAREL_WIDTH = 48
KAREL_HEIGHT = 48

VELOCITY = KAREL_WIDTH / 2
DELAY = 0.01

# Speeds
ENEMY_SPEED = 0.5  
LASER_SPEED = 8.0

# Input Mapping Constants
KEY_UP = 'UP_ARROW'
KEY_DOWN = 'DOWN_ARROW'
KEY_LEFT = 'LEFT_ARROW'
KEY_RIGHT = 'RIGHT_ARROW'

START_X = CANVAS_WIDTH / 2 - KAREL_WIDTH / 2
START_Y = CANVAS_HEIGHT / 2 - KAREL_HEIGHT / 2 
LASER_WIDTH = 8
LASER_HEIGHT = 8
LASER_COLOR = "#00FFFF"

MIN_RADIUS_SPAWN = KAREL_WIDTH + 16
MAX_RADIUS_SPAWN = (CANVAS_WIDTH / 2) - MIN_RADIUS_SPAWN

def main():
    canvas = Canvas(CANVAS_WIDTH, CANVAS_HEIGHT)
    
    # Spawn Karel-mini in the center
    karel = draw_image(canvas, START_X, START_Y, KAREL)
    
    # Global state tracking structures
    enemies = []
    lasers = []  
    karel_health = 10
    
    # HUD Display for player health
    health_text = canvas.create_text(10, 10, text=f"Health: {karel_health}", font="Arial", font_size=14, color="white")
    
    print(f"Controls: {KEY_UP}, {KEY_DOWN}, {KEY_LEFT}, {KEY_RIGHT} for movement.")

    last_spawn_time = time.time()
    SPAWN_INTERVAL = 1  

    while karel_health > 0:
        current_time = time.time()
        if current_time - last_spawn_time >= SPAWN_INTERVAL:
            new_enemy = spawn_enemy(canvas, karel)
            enemies.append(new_enemy)
            last_spawn_time = current_time

        # 1. Handle Input Phase
        dx, dy, should_exit = get_input_vector(canvas)
        if should_exit:
            return
        
        # Handle Input Phase (Mouse Clicks)
        for click_x, click_y in get_input_clicks(canvas):
            new_laser_data = create_tracked_laser(canvas, click_x, click_y, karel)
            if new_laser_data:
                lasers.append(new_laser_data)
            
        # 2. Update Position & Physics Phase
        if dx != 0 or dy != 0:
            canvas.move(karel, dx, dy)
            handle_boundaries(canvas, karel)

        # Update Lasers position and check for hits frame-by-frame
        update_lasers(canvas, lasers, enemies)

        # Move AI Enemies towards Karel and handle player collisions
        karel_health = move_enemies_and_check_damage(canvas, karel, enemies, karel_health, health_text)

        # 3. Frame Tick Synchronization Phase
        time.sleep(DELAY)

    show_game_over(canvas)


def create_tracked_laser(canvas, click_x, click_y, karel_object):
    """
    Single Responsibility: Spawns laser and calculates data vector properties.
    Returns a dictionary containing properties needed to update it smoothly frame-by-frame.
    """
    karel_x = canvas.get_left_x(karel_object) + KAREL_WIDTH / 2
    karel_y = canvas.get_top_y(karel_object) + KAREL_HEIGHT / 2
    
    dx = click_x - karel_x
    dy = click_y - karel_y
    
    distance = math.sqrt(dx**2 + dy**2)
    if distance == 0:  
        return None
    
    laser_id = canvas.create_rectangle(
        karel_x, karel_y, karel_x + LASER_WIDTH, karel_y + LASER_HEIGHT, LASER_COLOR, "outline"
    )

    return {
        "id": laser_id,
        "dir_x": dx / distance,
        "dir_y": dy / distance,
        "target_x": click_x,
        "target_y": click_y,
        "traveled": 0.0,
        "max_dist": distance
    }


def update_lasers(canvas, lasers_list, enemies_list):
    """
    Single Responsibility: Updates active lasers smoothly frame-by-frame.
    Triggers hit registers cleanly without locking up the game loop.
    """
    for i in range(len(lasers_list) - 1, -1, -1):
        laser = lasers_list[i]
        
        move_dist = min(LASER_SPEED, laser["max_dist"] - laser["traveled"])
        step_x = laser["dir_x"] * move_dist
        step_y = laser["dir_y"] * move_dist
        
        canvas.move(laser["id"], step_x, step_y)
        laser["traveled"] += move_dist
        
        # Check if destination reached
        if laser["traveled"] >= laser["max_dist"]:
            canvas.delete(laser["id"])
            create_hit_effect(canvas, laser["target_x"], laser["target_y"])
            check_and_destroy_hit_enemies(canvas, laser["target_x"], laser["target_y"], enemies_list)
            lasers_list.pop(i)


def spawn_enemy(canvas, karel):
    """Calculates a safe spawn ring coordinate and creates an enemy image."""
    karel_x = canvas.get_left_x(karel) + KAREL_WIDTH / 2
    karel_y = canvas.get_top_y(karel) + KAREL_HEIGHT / 2

    radius = round(random.uniform(MIN_RADIUS_SPAWN, MAX_RADIUS_SPAWN), 2)
    theta_angle = round(random.uniform(0, 2 * math.pi), 2)
    
    center_x = karel_x + radius * math.cos(theta_angle)
    center_y = karel_y + radius * math.sin(theta_angle)
    
    spawn_left_x = round(center_x - (KAREL_ENEMY_WIDTH / 2), 2)
    spawn_top_y = round(center_y - (KAREL_ENEMY_HEIGHT / 2), 2)

    return canvas.create_image_with_size(
        spawn_left_x, spawn_top_y, KAREL_ENEMY_WIDTH, KAREL_ENEMY_HEIGHT, KAREL_ENEMY
    )


def move_enemies_and_check_damage(canvas, karel_object, enemies_list, current_health, text_ui_id):
    """AI updates tracking movement and handles damage frames safely."""
    karel_center_x = canvas.get_left_x(karel_object) + KAREL_WIDTH / 2
    karel_center_y = canvas.get_top_y(karel_object) + KAREL_HEIGHT / 2

    for i in range(len(enemies_list) - 1, -1, -1):
        enemy_var = enemies_list[i]
        
        enemy_x = canvas.get_left_x(enemy_var) + KAREL_ENEMY_WIDTH / 2
        enemy_y = canvas.get_top_y(enemy_var) + KAREL_ENEMY_HEIGHT / 2
        
        dx = karel_center_x - enemy_x
        dy = karel_center_y - enemy_y
        distance = math.sqrt(dx**2 + dy**2)
        
        if distance > 0:
            canvas.move(enemy_var, (dx / distance) * ENEMY_SPEED, (dy / distance) * ENEMY_SPEED)
        
        e_left = canvas.get_left_x(enemy_var)
        e_top = canvas.get_top_y(enemy_var)
        k_left = canvas.get_left_x(karel_object)
        k_top = canvas.get_top_y(karel_object)
        
        if (e_left < k_left + KAREL_WIDTH and
            e_left + KAREL_ENEMY_WIDTH > k_left and
            e_top < k_top + KAREL_HEIGHT and
            e_top + KAREL_ENEMY_HEIGHT > k_top):
            
            canvas.delete(enemy_var)
            enemies_list.pop(i)
            
            current_health -= 1
            canvas.change_text(text_ui_id, f"Health: {current_health}")
            print(f"Karel hit! Remaining health: {current_health}")

    return current_health


def check_and_destroy_hit_enemies(canvas, target_x, target_y, enemies_list):
    """Checks if target coordinate lands inside active enemy bounds and deletes the hit enemy variable."""
    for i in range(len(enemies_list) - 1, -1, -1):
        enemy_var = enemies_list[i]
        
        left_x = canvas.get_left_x(enemy_var)
        top_y = canvas.get_top_y(enemy_var)
        right_x = left_x + KAREL_ENEMY_WIDTH
        bottom_y = top_y + KAREL_ENEMY_HEIGHT
        
        if left_x <= target_x <= right_x and top_y <= target_y <= bottom_y:
            canvas.delete(enemy_var)      
            enemies_list.pop(i)           
            print("Enemy eliminated by Laser!")


def show_game_over(canvas):
    """Draws Game Over message center screen."""
    canvas.create_text(
        CANVAS_WIDTH / 2, CANVAS_HEIGHT / 2, text="GAME OVER", font="Arial", font_size=16, color="red"
    )


def create_hit_effect(canvas, x, y):
    """Creates a brief explosion effect at target coordinates."""
    explosion = canvas.create_oval(x - 8, y - 8, x + 8, y + 8, "#FFFF00")
    time.sleep(0.01)
    canvas.delete(explosion)


def get_input_clicks(canvas):
    clicks = canvas.get_new_mouse_clicks()
    processed_clicks = []
    if clicks is not None:
        for click in clicks:
            if click is not None:
                processed_clicks.append((click[0], click[1]))
    return processed_clicks


def get_input_vector(canvas):
    dx = 0
    dy = 0
    should_exit = False
    
    pressed_keys = canvas.get_new_key_presses()
    for key in pressed_keys:
        if key == KEY_UP:
            dy -= VELOCITY
        if key == KEY_DOWN:
            dy += VELOCITY
        if key == KEY_LEFT:
            dx -= VELOCITY
        if key == KEY_RIGHT:
            dx += VELOCITY
        if key == 'Escape':
            should_exit = True
            
    return dx, dy, should_exit


def handle_boundaries(canvas, game_object):
    x = canvas.get_left_x(game_object)
    y = canvas.get_top_y(game_object)

    if x < 0:
        canvas.move(game_object, -x, 0)
    elif x + KAREL_WIDTH > CANVAS_WIDTH:
        overshoot_x = (x + KAREL_WIDTH) - CANVAS_WIDTH
        canvas.move(game_object, -overshoot_x, 0)
    
    if y < 0:
        canvas.move(game_object, 0, -y)
    elif y + KAREL_HEIGHT > CANVAS_HEIGHT:
        overshoot_y = (y + KAREL_HEIGHT) - CANVAS_HEIGHT
        canvas.move(game_object, 0, -overshoot_y)


def draw_image(canvas, left_x, top_y, image_name):
    """Draws a specified sized image object onto the target canvas."""
    return canvas.create_image_with_size(
        left_x, top_y, KAREL_WIDTH, KAREL_HEIGHT, image_name
    )


if __name__ == '__main__':
    main()


"""
===============================================================================
KAREL SURVIVAL GAME - SYSTEM ARCHITECTURE RESUME
===============================================================================

1. CORE ARCHITECTURE (THE GAME LOOP)
   - Runs continuously via 'while karel_health > 0:' at ~100 FPS (DELAY = 0.01).
   - Processes 3 strict frame phases: Input Handling -> State Updates -> Render.

2. ENEMY SPAWNING SYSTEM (THE DONUT METHOD)
   - Uses a non-blocking delta time check (runs every 2.0 seconds).
   - Trigonometry generates random coordinates within a ring around Karel:
     * spawn_x = karel_x + radius * cos(theta)
     * spawn_y = karel_y + radius * sin(theta)
   - Keeps spawns outside the player's view but within the canvas boundaries.

3. ASYNCHRONOUS LASER VECTOR ENGINE
   - Mouse clicks trigger 'create_tracked_laser', storing data in a dictionary.
   - Normalizes raw direction vectors into unit vectors (length = 1).
   - 'update_lasers' moves active lasers along their path frame-by-frame.
   - Prevents game freezing by eliminating localized, blocking 'while' loops.

4. HOMING ENEMY AI (STEERING BEHAVIOR)
   - Every frame, enemies calculate a vector path from themselves to Karel.
   - Vectors are normalized and scaled by ENEMY_SPEED (0.5 pixels/frame).
   - Guarantees enemies dynamically chase Karel regardless of her movement.

5. DUAL-LAYER COLLISION REGISTRY
   - Laser vs. Enemy: Checked via point-in-box boundary verification when a 
     laser reaches its terminal destination coordinate.
   - Enemy vs. Player: Checked via Axis-Aligned Bounding Box (AABB) overlap logic.
   - Valid collisions call 'canvas.delete(id)' using dynamic list tracking 
     iterated in reverse to avoid index corruption.
===============================================================================
"""