from graphics import Canvas
import time

# --- Constants (Your original values) ---
CANVAS_WIDTH = 600
CANVAS_HEIGHT = 300
BRICK_WIDTH = 30
BRICK_HEIGHT = 12
KAREL_WIDTH = 15
KAREL_HEIGHT = 17

# Asset Paths
KAREL_IMG = "karel mini.png"
LOGO_IMG1 = "stanford logo 1.png"
LOGO_IMG2 = "stanford logo 2.png"

def main():
    canvas = Canvas(CANVAS_WIDTH, CANVAS_HEIGHT)   

    while True:
        user_input = message_and_input()
        
        if user_input.lower() == "exit":
            print("God bless you!")
            break 
        
        try:
            stones_in_base = int(user_input)
            
            if stones_in_base > 0 and stones_in_base <= 20:
                
                canvas.clear()
                
                # Step 0: Show logo
                canvas.create_image(460, 15,LOGO_IMG1)
                canvas.create_image(15, 15,LOGO_IMG2)

                # Step 1: Draw Pyramid
                draw_pyramid(canvas, stones_in_base)
                
                # Step 2: Walking
                karel_walking(canvas, stones_in_base)
                
                # Step 3: Dancing
                karel_dancing(canvas, stones_in_base)
                
                # Step 4: Vintage Bubble
                create_vintage_bubble(
                    canvas,
                    150 - 22,
                    CANVAS_HEIGHT - BRICK_HEIGHT * stones_in_base - 60,
                    "I LOVE CODE IN PLACE ❤️"
                )
            
            else:
                print("Invalid! Number must be between 1 and 20.")
        except ValueError:
            print("Invalid! Please enter a number (1-20) or type 'EXIT' to quit.")

def message_and_input():
    print("--------------------------------------------------")
    print("           OPTIONAL CHALLENGE - PYRAMID")
    user_input = input("Enter a number for the brick base (1-20) or exit: ")
    print("")
    return user_input

def draw_pyramid(canvas,stones_in_base):
    # Draw rows from bottom to top
    for row in range(stones_in_base):
        bricks_in_row = stones_in_base - row
        
        # Center this row horizontally
        row_width = bricks_in_row * BRICK_WIDTH
        start_x = (CANVAS_WIDTH - row_width) / 2
        
        # Calculate Y position (stack upward from bottom)
        y = CANVAS_HEIGHT - (row + 1) * BRICK_HEIGHT
        
        # Draw each brick in the current row
        for col in range(bricks_in_row):
            x = start_x + col * BRICK_WIDTH
            draw_brick(canvas, x, y)
        time.sleep(0.1)

def draw_brick(canvas, x, y):
    canvas.create_rectangle(
        x, y,
        x + BRICK_WIDTH, y + BRICK_HEIGHT,
        "orange", "black"
    )

def karel_walking(canvas, stones_in_base):
    bottom_width = stones_in_base * BRICK_WIDTH
    bottom_start_x = (CANVAS_WIDTH - bottom_width) / 2
    
    karel_x = bottom_start_x - 15
    karel_y = CANVAS_HEIGHT - BRICK_HEIGHT - 5
    
    karel = canvas.create_image(karel_x, karel_y, KAREL_IMG)
    time.sleep(0.2)
    
    for step in range(stones_in_base):
        karel_x += 15
        karel_y -= 12 
        
        time.sleep(0.2)
        canvas.delete(karel)
        karel = canvas.create_image(karel_x, karel_y, KAREL_IMG)
    
    canvas.delete(karel)

def karel_dancing(canvas, stones_in_base):
    karel_y = CANVAS_HEIGHT - BRICK_HEIGHT * stones_in_base - 5 - BRICK_HEIGHT
    bottom_start_x = (CANVAS_WIDTH - BRICK_WIDTH) / 2
    karel_x = bottom_start_x + 15

    karel = canvas.create_image(karel_x, karel_y, KAREL_IMG)
    time.sleep(0.1)

    for i in range(5):
        karel_x -= 15   
        time.sleep(0.1)
        canvas.delete(karel)
        karel = canvas.create_image(karel_x, karel_y, KAREL_IMG)
        
        karel_x += 15   
        time.sleep(0.1)
        canvas.delete(karel)
        karel = canvas.create_image(karel_x, karel_y, KAREL_IMG)

def create_vintage_bubble(canvas, x, y, text):
    bubble_width = 190
    bubble_height = 20

    bubble = canvas.create_polygon(
        x, y,
        x + bubble_width, y,
        x + bubble_width, y + bubble_height,
        x + bubble_width - 30, y + bubble_height,
        x + bubble_width - 20, y + bubble_height + 20,
        x + bubble_width - 50, y + bubble_height,
        x, y + bubble_height,
        color="pink"
    )

    canvas.create_rectangle(
        x, y, x + bubble_width, y + bubble_height,
        outline="red", color='white'
    )
    
    canvas.create_text(
        x + 5,
        y + bubble_height // 2 - 5,
        text,
        font="Courier", 
        font_size=13,
        color='#8a0000ff'
    )
    time.sleep(0.5)
    return bubble

if __name__ == '__main__':
    main()