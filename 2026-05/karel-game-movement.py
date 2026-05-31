from graphics import Canvas
import time

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

        # 2. Update Position & Physics Phase
        if dx != 0 or dy != 0:
            canvas.move(karel, dx, dy)
            handle_boundaries(canvas, karel)

        # 3. Frame Tick Synchronization Phase
        time.sleep(DELAY)


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


if __name__ == '__main__':
    main()