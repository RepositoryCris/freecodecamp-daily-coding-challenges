from graphics import Canvas
import random 
import time

# GRID constants
ROWS = 6
COLUMNS = 6
GAP = 4    #pixels
EMPTY_X_SPACE = 0
EMPTY_Y_SPACE = 80

# CANVAS constants
CANVAS_WIDTH = 800
CANVAS_HEIGHT = 800 + EMPTY_Y_SPACE

# CARDS constants
CARD_WIDTH = 128    #pixels
CARD_HEIGHT = 128   #pixels

# GAME constants 
NUMBER_OF_PAIRS = 18
STANFORD_CARD_FACE_DOWN = "mg_stanford_u.png"

# TEXT color
MAIN_TEXT = "rgb(140, 21, 21)"

# RESET button
RESET_BUTTON = "reset button1.png"

fruits = [
    "apple",
    "banana",
    "strawberry",
    "grape",
    "avocado",
    "pineapple",
    "watermelon",
    "mango",
    "orange",
    "cherry",
    "blueberry",
    "dragonfruit",
    "guava",
    "coconut",
    "passionfruit",
    "rambutan",
    "blackberry",
    "papaya"
]

def main():
    canvas = Canvas(CANVAS_WIDTH, CANVAS_HEIGHT)
            
    while True:
        # Initial Setup (The Reset point)
        state = setup_game(canvas)
        
        # Run the game logic
        # We pass the 'state' dictionary values into the logic function
        memory_game_logic(
            canvas, 
            state["zones"], 
            state["hidden"], 
            state["board"], 
            state["ui_pairs"], 
            state["ui_console"], 
            state["reset_zone"]
        )

        # This print will only happen when a game ends or RESET is clicked
        print("🔄 Game Resetting...")

    #CONFETI AND MAY GOD BLESS YOU!
    print("END OF PROGRAM LIFE")
    #key = canvas.get_last_key_press()  Q TO QUIT

def setup_game(canvas):
    # 1. Clear previous drawings and draw background
    canvas.clear()
    color = "rgb(245, 235, 220)"  # Warm Ivory (245,235,220)
    canvas.create_rectangle(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT, color)

    # 2. Draw UI Elements
    create_message(canvas, CANVAS_WIDTH/2 , 35, "MEMORY GAME" , 45, MAIN_TEXT, "center")

    text = f"Pairs found: 0/{NUMBER_OF_PAIRS}"
    ui_pairs_found = create_message(canvas, CANVAS_WIDTH - 200, 60, text , 18, MAIN_TEXT)
    ui_console = create_message(canvas, 10, 60, f"Find all {NUMBER_OF_PAIRS} pairs" , 18, MAIN_TEXT)

    reset_clickable_zone = cordinates_to_place_reset_button()
    draw_reset_button(canvas, reset_clickable_zone)

    # PREPARING THE GAME BOARD
    random_board = create_random_board(fruits)

    hidden_cards = create_hidden_cards()

    clickable_card_zones = calculate_cordinates_to_place_cards()

    clickable_card_zones = add_index_and_random_value_to_clickable_card_zone(clickable_card_zones, random_board)

    draw_face_down_cards(canvas, clickable_card_zones)

    # Return a dictionary of the 'State' so the logic function can use it
    return {
        "zones": clickable_card_zones,
        "hidden": hidden_cards,
        "board": random_board,
        "ui_pairs": ui_pairs_found,
        "ui_console": ui_console,
        "reset_zone": reset_clickable_zone
    }


def memory_game_logic(canvas, clickable_card_zones, hidden_cards, random_board, ui_pairs_found, ui_console, reset_clickable_zone):
    score = 0
    revealed_cards = 0

    print("score: ", score)
    print("pairs_found: ", revealed_cards)

    while(True):

        first_choice = get_click_position(canvas, ui_console, reset_clickable_zone, clickable_card_zones, hidden_cards)

        if(first_choice == "RESET"):
            return 

        reveal_card(canvas, first_choice)
        
        second_choice = get_click_position(canvas, ui_console, reset_clickable_zone, clickable_card_zones, hidden_cards, first_choice)

        if(second_choice == "RESET"):
            return

        reveal_card(canvas, second_choice)

        if(first_choice["random_value"] == second_choice["random_value"]):
            hidden_cards[first_choice["index"]] = random_board[first_choice["index"]]
            hidden_cards[second_choice["index"]] = random_board[second_choice["index"]]
            print("Match!")

            score += 1
            revealed_cards +=2
            print("---------------------------------------")
            
            print(f"Pairs found: {score}/{NUMBER_OF_PAIRS}")
            print(f"{revealed_cards}/{NUMBER_OF_PAIRS * 2}", hidden_cards)
            
            text = f"Pairs found: {score}/{NUMBER_OF_PAIRS}"

            canvas.change_text(ui_pairs_found, text)
            time.sleep(0.5)

            if(revealed_cards == NUMBER_OF_PAIRS*2):
                print("God bless you!")
                canvas.change_text(ui_console, "GOD BLESS YOU!           Click on restart button to play again")
                time.sleep(1)
                # Professional touch: Wait the user to click Reset specifically 
                # so they can admire their finished board.
                while True:
                    choice = get_click_position(canvas, ui_console, reset_clickable_zone, clickable_card_zones, hidden_cards)
                    if choice == "RESET":
                        break # Exit this mini-loop
                break # Exit the game logic loop to trigger the main reset

            continue
            
        else:
            time.sleep(0.8)
            draw_face_down_card(canvas, first_choice)
            draw_face_down_card(canvas, second_choice)


def get_click_position(canvas, ui_console, reset_clickable_zone, clickable_card_zones, hidden_cards, first_choice = None):
    while(True):
        click = canvas.wait_for_click()

        click_x = click[0]
        click_y = click[1]
        #print(click)

        # Loop through every card's bounding box
        is_card_selected = False  # Start by assuming they missed

        if (reset_clickable_zone["x_initial"] <= click_x <= reset_clickable_zone["x_final"]) and (reset_clickable_zone["y_initial"] <= click_y <= reset_clickable_zone["y_final"]):
                print("user clicked on the reset button")
                return "RESET"

        for card in clickable_card_zones:

            if (card["x_initial"] <= click_x <= card["x_final"]) and (card["y_initial"] <= click_y <= card["y_final"]):
                
                print("Valid, you clicked inside a card")
                is_card_selected = True
                
                clicked_card = card
                canvas.change_text(ui_console, "")

                # FILTERS
                # Is the card already been matched?
                if(hidden_cards[clicked_card["index"]] != "*"):
                    print("That card has already been matched. Try again.")
                    canvas.change_text(ui_console, "That card has already been matched. Try again.")
                    continue
                
                # Is the card selected twice?
                if first_choice is not None and first_choice["index"] == clicked_card["index"]:
                    print("You clicked the same card twice. Try again.")         
                    canvas.change_text(ui_console, "You clicked the same card twice. Try again.")
                    continue

                return clicked_card

        # After checking all cards, if the flag is still False, they clicked the background!
        if not is_card_selected:
            print("Clicked outside! You missed all the cards.")
            canvas.change_text(ui_console, "Clicked outside! You missed all the cards.")


def add_index_and_random_value_to_clickable_card_zone(clickable_card_zones, game_board):
    i = 0
    for item, board_value in zip(clickable_card_zones, game_board):
        item["random_value"] = board_value
        item["index"] = i
        i += 1
    #print(clickable_card_zones)
    return clickable_card_zones


def draw_face_down_cards(canvas, clickable_card_zones):
    for position in clickable_card_zones:
        canvas.create_image(position["x_initial"],
                            position["y_initial"],
                            STANFORD_CARD_FACE_DOWN)


def draw_face_down_card(canvas, positions_to_insert):
    canvas.create_image(positions_to_insert["x_initial"], positions_to_insert["y_initial"], STANFORD_CARD_FACE_DOWN)


def reveal_card(canvas, choice):
    path = f"{choice["random_value"]}.png"
    canvas.create_image(choice["x_initial"], choice["y_initial"], path)


def calculate_cordinates_to_place_cards():
    clickable_card_zones = []

    for i in range(ROWS):
        for j in range(COLUMNS):
            gap_x = (i+1) * GAP
            gap_y = (j+1) * GAP

            point_x = EMPTY_X_SPACE + i*CARD_WIDTH + gap_x
            point_y = EMPTY_Y_SPACE + j*CARD_HEIGHT + gap_y

            clickable_zone = { "x_initial": point_x,
                               "y_initial": point_y,
                               "x_final": point_x + CARD_WIDTH,
                               "y_final": point_y + CARD_HEIGHT}
            
            clickable_card_zones.append(clickable_zone)
    #print(clickable_card_zones)
    return clickable_card_zones


def cordinates_to_place_reset_button():
    point_x = CANVAS_WIDTH - 24 - 20
    point_y = 55
    button_width = 24
    button_height = 24

    reset_clickable_zone = {"x_initial": point_x,
                            "y_initial": point_y,
                            "x_final": point_x + button_width,
                            "y_final": point_y + button_height}
    
    return reset_clickable_zone


def draw_reset_button(canvas, reset_clickable_zone):
    path = RESET_BUTTON
    canvas.create_image(reset_clickable_zone["x_initial"], reset_clickable_zone["y_initial"], path)

def create_random_board(array):
    board = []
    # Duplicate each card to obtain a pair
    for i in range (NUMBER_OF_PAIRS):
        board.append(array[i])
        board.append(array[i])

    random.shuffle(board)
    #print(len(board), board)
    return board


def create_hidden_cards():
    hidden_cards = []
    for i in range (NUMBER_OF_PAIRS*2):
        hidden_cards.append("*")
    
    #print(len(hidden_cards), hidden_cards)
    return hidden_cards

def create_message(canvas, x, y, text, size, color, anchor = None):
    if anchor == None:
        anchor = "nw"

    ui_message = canvas.create_text(
        x, 
        y, 
        text = text,
        font = 'Roboto', 
        font_size = size, 
        color = color,
        anchor=anchor
    )
    return ui_message


if __name__ == '__main__':
    
    main()

'''
def draw_grid():
    positions_to_insert = []
    area_to_click = []
    coordinate_x = 0
    coordinate_y = 0

    for i in range(ROWS):
        for j in range(COLUMNS):
            gap_x = (i+1) * GAP
            gap_y = (j+1) * GAP

            #print("gap_x", gap_x, "gap_y", gap_y)

            point_x =  i*CARD_WIDTH + gap_x
            point_y = j*CARD_HEIGHT + gap_y
            print("point_x",point_x,"point_y",point_y)

            new_xy_coordinate = { "x": point_x, "y": point_y }
            positions_to_insert.append(new_xy_coordinate)

            new_area_coordinate = { "x_initial": point_x, "y_initial": point_y , "x_final": point_x + CARD_WIDTH, "y_final": point_y + CARD_HEIGHT}
            area_to_click.append(new_area_coordinate)

            draw_paint_rectangle_XY(canvas, point_x, point_y)

    #print(positions_to_insert)
    #print()
    #print(area_to_click)
'''