from graphics import Canvas
import time
import random
    
CANVAS_WIDTH = 400
CANVAS_HEIGHT = 400
SIZE = 20

# if you make this larger, the game will go slower
DELAY = 0.1 
VELOCITY = 20


def main():
    canvas = Canvas(CANVAS_WIDTH, CANVAS_HEIGHT)
    
    snake = draw_rectangle(canvas, 0, 0, "blue")

    goal = draw_rectangle(canvas, 360, 360, "pink")
    
    x = 0
    y = 0
    while True:
        snake_x = canvas.get_left_x(snake)
        snake_y = canvas.get_top_y(snake)

        if snake_x + SIZE > CANVAS_WIDTH or snake_x < 0:
            print("game over")
            return
        if snake_y + SIZE > CANVAS_HEIGHT or snake_y < 0:
            print("game over")
            return


        goal_x = canvas.get_left_x(goal)
        goal_y = canvas.get_top_y(goal)

        if snake_x == goal_x and snake_y == goal_y:
            canvas.delete(goal)
            
            random_x, random_y = multiple_of_twenty()
            
            goal = draw_rectangle(canvas, random_x, random_y, "pink")


        keys = canvas.get_new_key_presses()

        for key in keys:
            if keys[0] == 'LEFT_ARROW':
                #print('left arrow pressed!')
                x -= VELOCITY
            
            if keys[0] == 'RIGHT_ARROW':
                #print('right arrow pressed!')
                x += VELOCITY
            
            if keys[0] == 'UP_ARROW':
                #print('up arrow pressed!')
                y -= VELOCITY
            
            if keys[0] == 'DOWN_ARROW':
                #print('down arrow pressed!')
                y += VELOCITY
        
        canvas.moveto(snake, x, y)
        time.sleep(DELAY)

def multiple_of_twenty():
    while True:
        random_x = random.randint(0, CANVAS_WIDTH-SIZE)
        random_y = random.randint(0, CANVAS_HEIGHT-SIZE)
        
        if random_x % 20 == 0 and random_y % 20 == 0:
            print("random_x ", random_x)
            print("random_y ", random_y)
            return random_x, random_y
        else:
            continue

def draw_rectangle(canvas, x, y, color):
    # Filled rectangle
    left_x = x
    top_y = y
    right_x = left_x + SIZE
    bottom_y = top_y + SIZE
    color = color

    rect = canvas.create_rectangle(
        left_x, 
        top_y, 
        right_x, 
        bottom_y,
        color
    )
    return rect


if __name__ == '__main__':
    main()