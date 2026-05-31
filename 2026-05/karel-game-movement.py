import time
from graphics import Canvas

# Constants for canvas dimensions and movement speed
CANVAS_WIDTH = 800
CANVAS_HEIGHT = 600
VELOCITY = 10  # Number of pixels to move per key press
DELAY = 0.016   # Small pause in seconds to optimize CPU usage

def main():
    # 1. Initialize the canvas
    canvas = Canvas(CANVAS_WIDTH, CANVAS_HEIGHT)
    
    karel = spawn_karel(canvas)

    # 3. Main Game Loop
    while True:
        # Fetch all new key presses since the last iteration
        pressed_keys = canvas.get_new_key_presses()
        
        for key in pressed_keys:
            # Match the documentation's exact string representation for arrow keys
            # Note: Often libraries use 'ArrowUp' or 'Up', adjust if your specific framework varies.
            if key == 'UP_ARROW':
                canvas.move(karel, 0, -VELOCITY)
            elif key == 'DOWN_ARROW':
                canvas.move(karel, 0, VELOCITY)
            elif key == 'LEFT_ARROW':
                canvas.move(karel, -VELOCITY, 0)
            elif key == 'RIGHT_ARROW':
                canvas.move(karel, VELOCITY, 0)
            elif key == 'Escape':
                print("Exiting application.")
                return

        # Mitigate CPU throttling
        time.sleep(DELAY)

def spawn_karel(canvas):
    # 2. Spawn the image near the center of the screen
    start_x = CANVAS_WIDTH // 2
    start_y = CANVAS_HEIGHT // 2
    karel = canvas.create_image(start_x, start_y, 'karel-mini.png')
    print("Use the arrow keys to move Karel! Press 'Escape' or close the window to exit.")
    return karel



if __name__ == '__main__':
    main()