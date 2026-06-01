from graphics import Canvas
import time
import math


# Canvas and Game Loop Configurations
CANVAS_WIDTH = 400
CANVAS_HEIGHT = 300

KAREL = 'karel-mini.png'
KAREL_WIDTH = 48
KAREL_HEIGHT = 48

VELOCITY = KAREL_WIDTH / 2
DELAY = 0.01

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

def main():
    canvas = Canvas(CANVAS_WIDTH, CANVAS_HEIGHT)
    
    # Spawn Karel-mini in the center
    karel = draw_image(canvas, START_X, START_Y, KAREL)
    
    print(f"Controls: {KEY_UP}, {KEY_DOWN}, {KEY_LEFT}, {KEY_RIGHT} for diagonal movement.")

    while True:
        # 1. Handle Input Phase
        dx, dy, should_exit = get_input_vector(canvas)
        if should_exit:
            return

        # Capture ALL mouse clicks registered in this frame slice
        clicks = get_input_clicks(canvas)
        
        # Handle Input Phase (Mouse Clicks via Scalable Function)
        for click_x, click_y in get_input_clicks(canvas):
            #print(f"Mouse clicked at position: ({click_x}, {click_y})")
            attack_coordinate(canvas, click_x, click_y, karel)
            
        # 2. Update Position & Physics Phase
        if dx != 0 or dy != 0:
            canvas.move(karel, dx, dy)
            handle_boundaries(canvas, karel)

        # 3. Frame Tick Synchronization Phase
        time.sleep(DELAY)

def attack_coordinate(canvas, click_x, click_y, karel_object):
    # Get Karel's current position (center of the image)
    karel_x = canvas.get_left_x(karel_object) + KAREL_WIDTH / 2
    karel_y = canvas.get_top_y(karel_object) + KAREL_HEIGHT / 2
    
    # Calculate direction vector from Karel to click point
    dx = click_x - karel_x
    dy = click_y - karel_y
    
    # Calculate distance and normalize direction
    distance = math.sqrt(dx**2 + dy**2)
    if distance == 0:  # Avoid division by zero
        return
    
    # Normalize direction (make it length 1)
    direction_x = dx / distance
    direction_y = dy / distance
    
    # Create laser at Karel's position
    laser_id = create_laser(canvas, karel_x, karel_y)

    # Animate the laser traveling toward click point
    LASER_SPEED = 8 # Pixels per frame
    traveled = 0

    while traveled < distance:
        # Calculate how far to move this frame
        move_distance = min(LASER_SPEED, distance - traveled)
        
        # Move laser relative to its current position
        canvas.move(laser_id, direction_x * move_distance, direction_y * move_distance)
        
        traveled += move_distance
        time.sleep(DELAY / 2)  # Faster animation
        
        # Optional: Remove laser when it reaches target
        if traveled >= distance:
            canvas.delete(laser_id)
            # Add hit effect here (optional)
            create_hit_effect(canvas, click_x, click_y)
    
    return laser_id

def create_hit_effect(canvas, x, y):
    """Create a small explosion effect at impact point"""
    # Create expanding circles
    for size in [5, 8, 11, 14]:
        # Use the same pattern as create_rectangle
        explosion = canvas.create_oval(
            x - size,  # left_x
            y - size,  # top_y
            x + size,  # right_x
            y + size,  # bottom_y
            "#FFFF00"  # color (yellow)
        )
        time.sleep(0.03)
        canvas.delete(explosion)
    
    # Final white flash
    flash = canvas.create_oval(
        x - 4,
        y - 4,
        x + 4,
        y + 4,
        "#FFFFFF"  # white
    )
    time.sleep(0.05)
    canvas.delete(flash)


def get_input_clicks(canvas):
    """
    Polls the canvas for mouse events and yields valid coordinate tuples.
    This acts as a memory-efficient stream generator.
    """
    clicks = canvas.get_new_mouse_clicks()
    
    if clicks is not None:
        for click in clicks:
            if click is not None:
                # Yields the data immediately without creating a temporary list
                yield click[0], click[1]


def get_input_vector(canvas):
    """
    Gathers frame inputs and calculates raw directional offsets.
    Returns: (dx, dy, should_exit)
    """
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
    """
    Checks the post-move positions of an object and applies a fallback delta
    if it oversteps the boundaries of the canvas.
    """
    x = canvas.get_left_x(game_object)
    y = canvas.get_top_y(game_object)

    # Horizontal Border Check
    if x < 0:
        canvas.move(game_object, -x, 0)
    elif x + KAREL_WIDTH > CANVAS_WIDTH:
        overshoot_x = (x + KAREL_WIDTH) - CANVAS_WIDTH
        canvas.move(game_object, -overshoot_x, 0)
    
    # Vertical Border Check
    if y < 0:
        canvas.move(game_object, 0, -y)
    elif y + KAREL_HEIGHT > CANVAS_HEIGHT:
        overshoot_y = (y + KAREL_HEIGHT) - CANVAS_HEIGHT
        canvas.move(game_object, 0, -overshoot_y)


def draw_image(canvas, left_x, top_y, image_name):
    """Draws a specified sized image object onto the target canvas."""
    image = canvas.create_image_with_size(
        left_x, 
        top_y, 
        KAREL_WIDTH, 
        KAREL_HEIGHT, 
        image_name
    )
    return image


def create_laser(canvas, x, y):
    left_x = x
    top_y = y
    right_x = x + LASER_WIDTH
    bottom_y = y + LASER_HEIGHT
    color = LASER_COLOR
    outline = "outline"

    laser_gun = canvas.create_rectangle(
        left_x, 
        top_y, 
        right_x, 
        bottom_y,
        color,
        outline
    )
    return laser_gun


if __name__ == '__main__':
    main()