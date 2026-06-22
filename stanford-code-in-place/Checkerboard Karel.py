from karel.stanfordkarel import *

"""
Karel should fill the whole world with beepers.
"""

def main():
    markers()

    while(corner_color_is("blue")):
        fromStart()
        nextColumn()
        afterStart()
        nextColumn()
    
    if(corner_color_is("red")):
        fromStart()
        nextColumn()
    goHome()

def markers():
    while(front_is_clear()):
        paint_corner("blue")
        move()
    paint_corner("red")
    
    turn_around()
    while(front_is_clear()):
        move()
    turn_around()

def fromStart():
    turn_left()
    while(front_is_clear()):
        if (no_beepers_present()):
            put_beeper()
        move()
        if front_is_clear():
            move()
            put_beeper()

def nextColumn():
    
    turn_around()
    while(front_is_clear()):
        move()
    turn_left()
    paint_corner("green") #MAKE THIS TRANSPARENT AND ITS DONE
    if(front_is_clear()):
        move()

def afterStart():
    turn_left()
    while(front_is_clear()):
        if (no_beepers_present()):
            move()
        put_beeper()
        if front_is_clear():
            move()

def goHome():
    turn_around()
    while(front_is_clear()):
        move()
    turn_around()

def turn_around():
    turn_left()
    turn_left()

def turn_right():
    turn_left()
    turn_left()
    turn_left()

# There is no need to edit code beyond this point
if __name__ == '__main__':
    main()