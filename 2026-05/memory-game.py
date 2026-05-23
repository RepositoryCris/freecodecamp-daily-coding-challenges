from graphics import Canvas
import random 
import time

# CANVAS constants
CANVAS_WIDTH = 1400
CANVAS_HEIGHT = 1000

# GRID constants
ROWS = 6
COLUMNS = 6
GAP = 32    #pixels

# CARDS constants
CARD_WIDTH = 128    #pixels
CARD_HEIGHT = 128   #pixels

# GAME constants 
NUMBER_OF_PAIRS = 18
STANFORD_CARD_FACE_DOWN = "mg_stanford_u.png"

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

    # PREPARING THE GAME BOARD
    random_board = create_random_board(fruits)
   
    hidden_cards = create_hidden_cards()

    clickable_card_zones = calculate_cordinates_to_place_cards(canvas)

    clickable_card_zones = add_index_and_random_value_to_clickable_card_zone(clickable_card_zones, random_board)

    draw_face_down_cards(canvas, clickable_card_zones)
    
    # GAME LOGIC
    memory_game_logic(canvas, clickable_card_zones, hidden_cards, random_board)

    #CONFETI AND MAY GOD BLESS YOU!
    print("END OF PROGRAM LIFE")
    #key = canvas.get_last_key_press()  Q TO QUIT

def memory_game_logic(canvas, clickable_card_zones, hidden_cards, random_board):
    score = 0
    revealed_cards = 0

    print("score: ", score)
    print("pairs_found: ", revealed_cards)

    while(True):
        first_choice = get_click_position(canvas, clickable_card_zones, hidden_cards)

        reveal_card(canvas, first_choice)
        
        second_choice = get_click_position(canvas, clickable_card_zones, hidden_cards, first_choice)

        reveal_card(canvas, second_choice)

        if(first_choice["random_value"] == second_choice["random_value"]):
            hidden_cards[first_choice["index"]] = random_board[first_choice["index"]]
            hidden_cards[second_choice["index"]] = random_board[second_choice["index"]]
            print("Match!")

            ################# TO DO ADD SCORE
            score += 1
            revealed_cards +=2
            print("---------------------------------------")
            print("Pairs found: ",f"{score}/18")
            print(f"{revealed_cards}/36",hidden_cards)

            if(revealed_cards == NUMBER_OF_PAIRS*2):
                print("God bless you!")
                break

            continue
            #########################################
        else:
            time.sleep(1)
            draw_face_down_card(canvas, first_choice)
            draw_face_down_card(canvas, second_choice)

def get_click_position(canvas, clickable_card_zones, hidden_cards, first_choice = None):
    while(True):
        click = canvas.wait_for_click()

        click_x = click[0]
        click_y = click[1]
        #print(click)

        # Loop through every card's bounding box
        is_card_selected = False  # Start by assuming they missed

        for card in clickable_card_zones:
            if (card["x_initial"] <= click_x <= card["x_final"]) and (card["y_initial"] <= click_y <= card["y_final"]):
                
                print("Valid, you clicked inside a card")
                is_card_selected = True
                
                clicked_card = card

                # FILTERS
                # Is the card already been matched?
                if(hidden_cards[clicked_card["index"]] != "*"):
                    print("That card has already been matched. Try again.")                # TO DO show this message in screen
                    continue
                
                # Is the card selected twice?
                if first_choice is not None and first_choice["index"] == clicked_card["index"]:
                    print("You clicked the same card twice. Try again.")                # TO DO show this message in screen
                    continue

                return clicked_card

        # After checking all cards, if the flag is still False, they clicked the background!
        if not is_card_selected:
            print("Clicked outside! You missed all the cards.")


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


def calculate_cordinates_to_place_cards(canvas):
    clickable_card_zones = []

    for i in range(ROWS):
        for j in range(COLUMNS):
            gap_x = (i+1) * GAP
            gap_y = (j+1) * GAP

            point_x =  i*CARD_WIDTH + gap_x
            point_y = j*CARD_HEIGHT + gap_y

            clickable_zone = { "x_initial": point_x,
                               "y_initial": point_y,
                               "x_final": point_x + CARD_WIDTH,
                               "y_final": point_y + CARD_HEIGHT}
            
            clickable_card_zones.append(clickable_zone)
    #print(clickable_card_zones)
    return clickable_card_zones
    

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


def draw_paint_rectangle_XY(canvas, x_offset, y_offset):

    x = x_offset
    y = y_offset
    x_width = x + CARD_WIDTH
    y_height = y + CARD_HEIGHT
    color = "blue"

    rect = canvas.create_rectangle(
        x, 
        y, 
        x_width, 
        y_height,
        color
    )

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