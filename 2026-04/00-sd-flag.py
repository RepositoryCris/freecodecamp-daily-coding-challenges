from karel.stanfordkarel import *

def main():
    #Draw the horizontal red color
    draw_red_color()
    #Draw the horizontal white color
    draw_white_color()
    #Draw the horizontal black color
    draw_black_color()
    #Draw the green triangle
    turn_left()
    draw_green_triangle()

def draw_red_color():
    #Go up
    turn_left()
    while front_is_clear():
        move()
    turn_right()

    for i in range (3):
        paint_red()
        go_to_the_start()

def go_to_the_start():
    turn_around()
    while front_is_clear():
        move()
    turn_around()
    go_one_block_below()

def go_one_block_below():
    turn_right()
    if front_is_clear():
        move()
        turn_left()

def paint_red():
    paint_corner("red") 
    while front_is_clear():
        paint_corner("red") 
        move()
        if (front_is_blocked()):
            paint_corner("red")
    
def draw_white_color():
    for i in range (3):
        paint_white()
        go_to_the_start()

def paint_white():
    paint_corner("white") 
    while front_is_clear():
        paint_corner("white") 
        move()
        if (front_is_blocked()):
            paint_corner("white")

def draw_black_color():
     for i in range (3):
        paint_black()
        go_to_the_start()

def paint_black():
    paint_corner("black") 
    while front_is_clear():
        paint_corner("black") 
        move()
        if (front_is_blocked()):
            paint_corner("black")

def draw_green_triangle():
    #Draw the green triangle to the left
    for i in range (4):
        green_triangle_left_to_right()

    #Draw the green triangle to the right
    for i in range (4):
        green_triangle_right_to_left()
    
    fill_the_triangle()

def green_triangle_left_to_right():
    paint_corner("green")
    turn_left()
    move()
    paint_corner("green")
    turn_right()
    move()
    paint_corner("green")

def green_triangle_right_to_left():
    turn_around()
    move()
    paint_corner("green")
    turn_right()
    move()
    paint_corner("green")
    turn_right()

def fill_the_triangle():
    turn_right()
    for i in range(6):
       move()
    turn_left()
    #Draw the green triangle to the left
    for i in range (2):
        green_triangle_left_to_right()

    #Draw the green triangle to the right
    for i in range (2):
        green_triangle_right_to_left()
    
    turn_right()
    move()
    move()
    paint_corner("green")

    #return to the start
    while(front_is_clear()):
        move()
    turn_left()

def turn_around():
    turn_left()
    turn_left()

def turn_right():
    turn_left()
    turn_left()
    turn_left()

# don't change this code
if __name__ == '__main__':
    main()