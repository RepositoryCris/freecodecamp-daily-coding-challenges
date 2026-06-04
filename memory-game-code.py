from graphics import Canvas
import random 
import time

# GRID dimensions for individual rounds (4 columns x 6 rows = 24 cards)
ROUND_ROWS = 6
ROUND_COLUMNS = 4

GAP = 8    # pixels
EMPTY_X_SPACE = 0
EMPTY_Y_SPACE = 100

SPACE_Y_UI_PAIRS_UI_CONSOLE = 80
SPACE_X_RIGHT_UI_PAIRS = 300

# CARD scales
STANDARD_CARD_SIZE = 128  # Normal gameplay size
GALLERY_WIDTH = 300       # High-res study size requested
GALLERY_HEIGHT = 300      # High-res study size requested

# CANVAS dimensions
CANVAS_WIDTH = STANDARD_CARD_SIZE * ROUND_ROWS + (GAP*(ROUND_ROWS+1))
CANVAS_HEIGHT = STANDARD_CARD_SIZE * ROUND_COLUMNS + (GAP*(ROUND_COLUMNS+1)) + EMPTY_Y_SPACE
print(CANVAS_WIDTH, CANVAS_HEIGHT)
# GAME constants 
TOTAL_CONCEPTS = 24
PAIRS_PER_ROUND = 12
STANFORD_CARD_FACE_DOWN = "su-card.png"

MAIN_TEXT = "rgb(140, 21, 21)"

# UI Buttons
RESET_BUTTON = "reset-24x24.png"
ROUND_1_BUTTON_IMG = "round-1-button.png"
ROUND_2_BUTTON_IMG = "round-2-button.png"
ROUND_2_DISABLED_IMG = "round-2-button-disabled.png"
GALLERY_BUTTON_IMG = "gallery-24x24.png"
GALLERY_DISABLED_IMG = "gallery-24x24-disabled.png"
SHOW_PREVIOUS_IMG = "gallery-previous.png"
SHOW_NEXT_IMG = "gallery-next.png"

programming_terms = [
    "algorithm.png", "algorithm-img.png",
    "array.png", "array-img.png",
    "boolean.png", "boolean-img.png",
    "bug.png", "bug-img.png",
    "comments.png", "comments-img.png",
    "conditionals.png", "conditionals-img.png",
    "constant.png", "constant-img.png",
    "data-type.png", "data-type-img.png",
    "debugging.png", "debugging-img.png",
    "decomposition.png", "decomposition-img.png",
    "documentation.png", "documentation-img.png",
    "for-loop.png", "for-loop-img.png",
    "function.png", "function-img.png",
    "ide.png", "ide-img.png",
    "none.png", "none-img.png",
    "object.png", "object-img.png",
    "parameters.png", "parameters-img.png",
    "pseudocode.png", "pseudocode-img.png",
    "return-value.png", "return-value-img.png",
    "scope.png", "scope-img.png",
    "stepwise-refinement.png", "stepwise-refinement-img.png",
    "string.png", "string-img.png",
    "variable.png", "variable-img.png",
    "while-loop.png", "while-loop-img.png"
]


class Card:
    def __init__(self, index, base_concept, asset_path, execution_round, is_image_type):
        self.index = index
        self.base_concept = base_concept  
        self.asset_path = asset_path      
        self.execution_round = execution_round
        self.is_image_type = is_image_type 
        
        # State Flags
        self.is_revealed = False
        self.is_matched = False
        
        # Coordinates
        self.x_initial = 0
        self.y_initial = 0
        self.x_final = 0
        self.y_final = 0
        
        self.current_width = STANDARD_CARD_SIZE
        self.current_height = STANDARD_CARD_SIZE

    def set_coordinates(self, x_init, y_init, width, height):
        self.current_width = width
        self.current_height = height
        self.x_initial = x_init
        self.y_initial = y_init
        self.x_final = x_init + width
        self.y_final = y_init + height

    def is_clicked(self, click_x, click_y):
        return (self.x_initial <= click_x <= self.x_final) and \
               (self.y_initial <= click_y <= self.y_final)

    def draw(self, canvas, face_down_asset, force_face_up=False):
        if self.is_revealed or self.is_matched or force_face_up:
            canvas.create_image_with_size(
                self.x_initial, self.y_initial, 
                self.current_width, self.current_height, self.asset_path
            )
        else:
            canvas.create_image_with_size(
                self.x_initial, self.y_initial, 
                self.current_width, self.current_height, face_down_asset
            )


class GameState:
    def __init__(self):
        self.current_round = 1  # 1 = Round 1, 2 = Round 2, 3 = Gallery Mode
        self.round_1_complete = False
        self.round_2_complete = False
        
        # Independent Scores
        self.round_1_score = 0
        self.round_2_score = 0
        
        # Completely Independent Canvas Text Elements Tracking
        self.r1_ui_pairs = None
        self.r1_ui_console = None
        
        self.r2_ui_pairs = None
        self.r2_ui_console = None
        
        self.gal_ui_pairs = None
        self.gal_ui_console = None
        
        self.gallery_index = 0
        self.gallery_pairs_list = [] 
        self.deck = []


def main():
    canvas = Canvas(CANVAS_WIDTH, CANVAS_HEIGHT)
    while True:
        game_state = GameState()
        ui_elements = setup_game(canvas, game_state)
        memory_game_logic(canvas, game_state, ui_elements)
        print("🔄 Game Resetting...")


def setup_game(canvas, game_state):
    create_divided_deck(programming_terms, game_state)
    ui_elements = render_window_chrome(canvas, game_state)
    update_board_layout_coordinates(game_state)
    draw_active_scene(canvas, game_state, ui_elements)
    return ui_elements


def render_window_chrome(canvas, game_state):
    canvas.clear()
    color = "rgb(245, 235, 220)"  # Warm Ivory
    canvas.create_rectangle(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT, color)

    create_message(canvas, CANVAS_WIDTH / 2, 35, "Programming Fundamentals Match", 50, MAIN_TEXT, "center")

    # Clear old tracking references to avoid hanging graphics memory pointers
    game_state.r1_ui_pairs = None
    game_state.r1_ui_console = None
    game_state.r2_ui_pairs = None
    game_state.r2_ui_console = None
    game_state.gal_ui_pairs = None
    game_state.gal_ui_console = None

    # Render distinct components strictly depending on the current application screen state
    if game_state.current_round == 1:
        text = f"Round 1:  {game_state.round_1_score}/{PAIRS_PER_ROUND} Pairs"
        if not game_state.round_1_complete:
            console_text = f"🔍 Match each concept with its visual representation."
        else:
            console_text = "🎉 Round 1 Complete! Round 2 is now unlocked."
        game_state.r1_ui_pairs = create_message(canvas, CANVAS_WIDTH - SPACE_X_RIGHT_UI_PAIRS, SPACE_Y_UI_PAIRS_UI_CONSOLE, text, 18, MAIN_TEXT)
        game_state.r1_ui_console = create_message(canvas, 10, SPACE_Y_UI_PAIRS_UI_CONSOLE, console_text, 18, MAIN_TEXT)

    elif game_state.current_round == 2:
        text = f"Round 2:  {game_state.round_2_score}/{PAIRS_PER_ROUND} Pairs"
        if not game_state.round_2_complete:
            console_text = f"🔍 Match each concept with its visual representation."
        else:
            console_text = "🎉 Congratulations! Study Mode is now unlocked."
        game_state.r2_ui_pairs = create_message(canvas, CANVAS_WIDTH - SPACE_X_RIGHT_UI_PAIRS, SPACE_Y_UI_PAIRS_UI_CONSOLE, text, 18, MAIN_TEXT)
        game_state.r2_ui_console = create_message(canvas, 10, SPACE_Y_UI_PAIRS_UI_CONSOLE, console_text, 18, MAIN_TEXT)

    else:
        text = f"Reviewing Pair: {game_state.gallery_index + 1}/{TOTAL_CONCEPTS}"
        console_text = "Study Mode: 🖼️ illustrations | 📝 concepts"
        game_state.gal_ui_pairs = create_message(canvas, CANVAS_WIDTH - SPACE_X_RIGHT_UI_PAIRS, SPACE_Y_UI_PAIRS_UI_CONSOLE, text, 18, MAIN_TEXT)
        game_state.gal_ui_console = create_message(canvas, 10, SPACE_Y_UI_PAIRS_UI_CONSOLE, console_text, 18, MAIN_TEXT)

    reset_zone = coordinates_to_place_reset_button()
    r1_zone = coordinates_to_place_round_1_button()
    r2_zone = coordinates_to_place_round_2_button()
    gal_zone = coordinates_to_place_gallery_button()

    canvas.create_image(reset_zone["x_initial"], reset_zone["y_initial"], RESET_BUTTON)
    canvas.create_image(r1_zone["x_initial"], r1_zone["y_initial"], ROUND_1_BUTTON_IMG)
    
    if game_state.round_1_complete:
        canvas.create_image(r2_zone["x_initial"], r2_zone["y_initial"], ROUND_2_BUTTON_IMG)
    else:
        canvas.create_image(r2_zone["x_initial"], r2_zone["y_initial"], ROUND_2_DISABLED_IMG)

    if game_state.round_2_complete:
        canvas.create_image(gal_zone["x_initial"], gal_zone["y_initial"], GALLERY_BUTTON_IMG)
    else:
        canvas.create_image(gal_zone["x_initial"], gal_zone["y_initial"], GALLERY_DISABLED_IMG)

    return {
        "reset_zone": reset_zone,
        "r1_zone": r1_zone,
        "r2_zone": r2_zone,
        "gal_zone": gal_zone,
        "prev_zone": None, 
        "next_zone": None
    }


def create_divided_deck(terms_list, game_state):
    deck = []
    base_terms = [item for item in terms_list if "-img" not in item]
    random.shuffle(base_terms)
    
    round_1_bases = base_terms[:PAIRS_PER_ROUND]
    round_2_bases = base_terms[PAIRS_PER_ROUND:TOTAL_CONCEPTS]
    
    game_state.gallery_pairs_list = []
    
    global_idx = 0
    for base in round_1_bases:
        concept = base.replace(".png", "")
        t_card = Card(global_idx, concept, base, execution_round=1, is_image_type=False)
        global_idx += 1
        i_card = Card(global_idx, concept, base.replace(".png", "-img.png"), execution_round=1, is_image_type=True)
        global_idx += 1
        deck.append(t_card)
        deck.append(i_card)
        game_state.gallery_pairs_list.append({"text_card": t_card, "img_card": i_card})

    for base in round_2_bases:
        concept = base.replace(".png", "")
        t_card = Card(global_idx, concept, base, execution_round=2, is_image_type=False)
        global_idx += 1
        i_card = Card(global_idx, concept, base.replace(".png", "-img.png"), execution_round=2, is_image_type=True)
        global_idx += 1
        deck.append(t_card)
        deck.append(i_card)
        game_state.gallery_pairs_list.append({"text_card": t_card, "img_card": i_card})

    r1_slice = deck[:PAIRS_PER_ROUND * 2]
    r2_slice = deck[PAIRS_PER_ROUND * 2:]
    random.shuffle(r1_slice)
    random.shuffle(r2_slice)
    
    final_deck = r1_slice + r2_slice
    for i, card in enumerate(final_deck):
        card.index = i

    print(f"📦 Segregated Deck Compiled. R1 Elements: {len(r1_slice)}, R2 Elements: {len(r2_slice)}")
    game_state.deck = final_deck


def update_board_layout_coordinates(state):
    if state.current_round == 3:
        current_pair = state.gallery_pairs_list[state.gallery_index]
        
        left_margin_x = 100
        middle_gap_space = 12
        
        img_x = left_margin_x
        text_x = left_margin_x + GALLERY_WIDTH + middle_gap_space
        
        available_height_space = CANVAS_HEIGHT - EMPTY_Y_SPACE
        centered_y = EMPTY_Y_SPACE + (available_height_space - GALLERY_HEIGHT) / 2 - 20

        current_pair["img_card"].set_coordinates(img_x, centered_y, GALLERY_WIDTH, GALLERY_HEIGHT)
        current_pair["text_card"].set_coordinates(text_x, centered_y, GALLERY_WIDTH, GALLERY_HEIGHT)
        return

    r1_idx = 0
    r2_idx = PAIRS_PER_ROUND * 2
    
    for i in range(ROUND_ROWS):
        for j in range(ROUND_COLUMNS):
            gap_x = (i + 1) * GAP
            gap_y = (j + 1) * GAP
            point_x = EMPTY_X_SPACE + i * STANDARD_CARD_SIZE + gap_x
            point_y = EMPTY_Y_SPACE + j * STANDARD_CARD_SIZE + gap_y

            state.deck[r1_idx].set_coordinates(point_x, point_y, STANDARD_CARD_SIZE, STANDARD_CARD_SIZE)
            r1_idx += 1
            
            state.deck[r2_idx].set_coordinates(point_x, point_y, STANDARD_CARD_SIZE, STANDARD_CARD_SIZE)
            r2_idx += 1


def draw_active_scene(canvas, state, ui):
    if state.current_round == 3:
        current_pair = state.gallery_pairs_list[state.gallery_index]
        current_pair["img_card"].draw(canvas, STANFORD_CARD_FACE_DOWN, force_face_up=True)
        current_pair["text_card"].draw(canvas, STANFORD_CARD_FACE_DOWN, force_face_up=True)
        render_gallery_pagination_buttons(canvas, state, ui)
    else:
        for card in state.deck:
            if card.execution_round == state.current_round:
                card.draw(canvas, STANFORD_CARD_FACE_DOWN)


def render_gallery_pagination_buttons(canvas, state, ui):
    button_y = (CANVAS_HEIGHT - SPACE_Y_UI_PAIRS_UI_CONSOLE) / 2 + GALLERY_HEIGHT/2
    button_w = 24
    button_h = 24
    
    if state.gallery_index > 0:
        prev_x = 80
        canvas.create_image(prev_x, button_y, SHOW_PREVIOUS_IMG)
        ui["prev_zone"] = {"x_initial": prev_x, "y_initial": button_y, "x_final": prev_x + button_w, "y_final": button_y + button_h}
    else:
        ui["prev_zone"] = None

    if state.gallery_index < TOTAL_CONCEPTS - 1:
        next_x = CANVAS_WIDTH - 80
        canvas.create_image(next_x, button_y, SHOW_NEXT_IMG)
        ui["next_zone"] = {"x_initial": next_x, "y_initial": button_y, "x_final": next_x + button_w, "y_final": button_y + button_h}
    else:
        ui["next_zone"] = None


def memory_game_logic(canvas, state, ui):
    print(f"Round 1 Score: {state.round_1_score} | Round 2 Score: {state.round_2_score}")

    while True:
        first_card = get_clicked_card(canvas, state, ui)
        if first_card == "RESET": return 
        if first_card == "CHANGE_ROUND": continue 

        first_card.is_revealed = True
        first_card.draw(canvas, STANFORD_CARD_FACE_DOWN)
        
        second_card = get_clicked_card(canvas, state, ui, first_card)
        if second_card == "RESET": return
        if second_card == "CHANGE_ROUND":
            first_card.is_revealed = False
            first_card.draw(canvas, STANFORD_CARD_FACE_DOWN)
            continue

        second_card.is_revealed = True
        second_card.draw(canvas, STANFORD_CARD_FACE_DOWN)

        print(f"First choice data value: {first_card.asset_path}")
        print(f"Second choice data value: {second_card.asset_path}")

        if first_card.base_concept == second_card.base_concept:          
            first_card.is_matched = True
            second_card.is_matched = True
            print("Excellent! ✅ You found a pair.")
            
            # 1. Independent score management updates
            if state.current_round == 1:
                state.round_1_score += 1
                current_score = state.round_1_score
                revealed_cards = state.round_1_score * 2
                
                # Update text components dedicated strictly to Round 1
                canvas.change_text(state.r1_ui_pairs, f"Pairs found: {current_score}/{PAIRS_PER_ROUND}")
                canvas.change_text(state.r1_ui_console, "✅ Excellent! You found a pair.")
            else:
                state.round_2_score += 1
                current_score = state.round_2_score
                revealed_cards = state.round_2_score * 2
                
                # Update text components dedicated strictly to Round 2
                canvas.change_text(state.r2_ui_pairs, f"Pairs found: {current_score}/{PAIRS_PER_ROUND}")
                canvas.change_text(state.r2_ui_console, "✅ Excellent! You found a pair.")
            
            print("---------------------------------------")
            print(f"Pairs found in Round {state.current_round}: {current_score}/{PAIRS_PER_ROUND}")
            
            round_cards = [c for c in state.deck if c.execution_round == state.current_round]
            hidden_cards_representation = [c.asset_path if c.is_matched else "*" for c in round_cards]
            print(f"{revealed_cards}/{PAIRS_PER_ROUND * 2}", hidden_cards_representation)
            
            time.sleep(0.5)

            # 2. Check for round target completions independently
            if current_score == PAIRS_PER_ROUND:
                if state.current_round == 1:
                    state.round_1_complete = True
                    print("Well done with Round 1!")
                    canvas.change_text(state.r1_ui_console, "🎉 Round 1 Complete! Round 2 is now unlocked.")
                    ui = render_window_chrome(canvas, state)
                    draw_active_scene(canvas, state, ui)
                else:
                    state.round_2_complete = True
                    print("Round 2 Complete! Game Finished.")
                    canvas.change_text(state.r2_ui_console, "🎉 Congratulations! Study Mode unlocked.")
                    ui = render_window_chrome(canvas, state)
                    draw_active_scene(canvas, state, ui)
        else:
            print("Not a match. Flipping back... 🃏 Keep going—you'll find it.")
            
            # Modify target active loop text surfaces safely based on active screen states
            if state.current_round == 1:
                canvas.change_text(state.r1_ui_console, "❌ Not a match. Keep trying!")
            else:
                canvas.change_text(state.r2_ui_console, "❌ Not a match. Keep trying!")
                
            time.sleep(1.0) 
            
            first_card.is_revealed = False
            second_card.is_revealed = False
            first_card.draw(canvas, STANFORD_CARD_FACE_DOWN)
            second_card.draw(canvas, STANFORD_CARD_FACE_DOWN)


def get_clicked_card(canvas, state, ui, first_card=None):
    while True:
        click = canvas.wait_for_click()
        click_x, click_y = click[0], click[1]

        if (ui["reset_zone"]["x_initial"] <= click_x <= ui["reset_zone"]["x_final"]) and \
           (ui["reset_zone"]["y_initial"] <= click_y <= ui["reset_zone"]["y_final"]):
            print("user clicked on the reset button")
            return "RESET"

        if (ui["r1_zone"]["x_initial"] <= click_x <= ui["r1_zone"]["x_final"]) and \
           (ui["r1_zone"]["y_initial"] <= click_y <= ui["r1_zone"]["y_final"]):
            if state.current_round != 1:
                print("Navigating back to check historical view of Round 1 space.")
                state.current_round = 1
                ui = render_window_chrome(canvas, state)
                update_board_layout_coordinates(state)
                draw_active_scene(canvas, state, ui)
                return "CHANGE_ROUND"

        if (ui["r2_zone"]["x_initial"] <= click_x <= ui["r2_zone"]["x_final"]) and \
           (ui["r2_zone"]["y_initial"] <= click_y <= ui["r2_zone"]["y_final"]):
            if not state.round_1_complete:
                print("Locked Action Target: Clear Round 1 to view this space context block.")
                canvas.change_text(state.r1_ui_console, "Complete Round 1 to unlock Round 2.")
                continue
            elif state.current_round != 2:
                print("Navigating to look at the Round 2 view space.")
                state.current_round = 2
                ui = render_window_chrome(canvas, state)
                update_board_layout_coordinates(state)
                draw_active_scene(canvas, state, ui)
                return "CHANGE_ROUND"

        if (ui["gal_zone"]["x_initial"] <= click_x <= ui["gal_zone"]["x_final"]) and \
           (ui["gal_zone"]["y_initial"] <= click_y <= ui["gal_zone"]["y_final"]):
            if not state.round_2_complete:
                # Handle error output updates smoothly on whatever screen layout is currently open
                if state.current_round == 1:
                    canvas.change_text(state.r1_ui_console, "Complete both rounds to unlock Study Mode.")
                elif state.current_round == 2:
                    canvas.change_text(state.r2_ui_console, "Complete both rounds to unlock Study Mode.")
                continue
            elif state.current_round != 3:
                print("Entering Study Flashcards Gallery Mode...")
                state.current_round = 3
                ui = render_window_chrome(canvas, state)
                update_board_layout_coordinates(state)
                draw_active_scene(canvas, state, ui)
                return "CHANGE_ROUND"

        if state.current_round == 3:
            if ui["prev_zone"] and (ui["prev_zone"]["x_initial"] <= click_x <= ui["prev_zone"]["x_final"]) and \
               (ui["prev_zone"]["y_initial"] <= click_y <= ui["prev_zone"]["y_final"]):
                state.gallery_index -= 1
                print(f"Showing previous flashcard pair. Index: {state.gallery_index}")
                
                ui = render_window_chrome(canvas, state)
                update_board_layout_coordinates(state)  
                draw_active_scene(canvas, state, ui)
                return "CHANGE_ROUND"
            
            if ui["next_zone"] and (ui["next_zone"]["x_initial"] <= click_x <= ui["next_zone"]["x_final"]) and \
               (ui["next_zone"]["y_initial"] <= click_y <= ui["next_zone"]["y_final"]):
                state.gallery_index += 1
                print(f"Showing next flashcard pair. Index: {state.gallery_index}")
                
                ui = render_window_chrome(canvas, state)
                update_board_layout_coordinates(state)  
                draw_active_scene(canvas, state, ui)
                return "CHANGE_ROUND"
                
            continue 

        is_card_selected = False
        for card in state.deck:
            if card.execution_round == state.current_round and card.is_clicked(click_x, click_y):
                is_card_selected = True
                print("Valid, you clicked inside a card")
                
                if card.is_matched:
                    print("That card has already been matched. Try again.")
                    if state.current_round == 1:
                        canvas.change_text(state.r1_ui_console, "This pair has already been completed.")
                    else:
                        canvas.change_text(state.r2_ui_console, "This pair has already been completed.")
                    break 
                    
                if first_card and card.index == first_card.index:
                    print("You clicked the same card twice. Try again.")
                    if state.current_round == 1:
                        canvas.change_text(state.r1_ui_console, "Choose a different card.")
                    else:
                        canvas.change_text(state.r2_ui_console, "Choose a different card.")
                    break 
                
                if state.current_round == 1:
                    canvas.change_text(state.r1_ui_console, "🔍 Match each concept with its visual representation.")
                else:
                    canvas.change_text(state.r2_ui_console, "🔍 Match each concept with its visual representation.")
                return card

        if not is_card_selected:
            print("Clicked outside! You missed all active elements.")
            if state.current_round == 1:
                canvas.change_text(state.r1_ui_console, "Choose a card.")
            else:
                canvas.change_text(state.r2_ui_console, "Choose a card.")


def coordinates_to_place_reset_button():
    point_x = CANVAS_WIDTH - 24 - GAP
    point_y = SPACE_Y_UI_PAIRS_UI_CONSOLE - 5
    return {"x_initial": point_x, "y_initial": point_y, "x_final": point_x + 24, "y_final": point_y + 24}


def coordinates_to_place_round_1_button():
    point_x = CANVAS_WIDTH - 4*(24 + GAP)
    point_y = SPACE_Y_UI_PAIRS_UI_CONSOLE - 5 
    return {"x_initial": point_x, "y_initial": point_y, "x_final": point_x + 24, "y_final": point_y + 24}


def coordinates_to_place_round_2_button():
    point_x = CANVAS_WIDTH - 3*(24 + GAP)
    point_y = SPACE_Y_UI_PAIRS_UI_CONSOLE - 5
    return {"x_initial": point_x, "y_initial": point_y, "x_final": point_x + 24, "y_final": point_y + 24}


def coordinates_to_place_gallery_button():
    point_x = CANVAS_WIDTH - 2*(24 + GAP)
    point_y = SPACE_Y_UI_PAIRS_UI_CONSOLE - 5
    return {"x_initial": point_x, "y_initial": point_y, "x_final": point_x + 24, "y_final": point_y + 24}


def create_message(canvas, x, y, text, size, color, anchor=None):
    if anchor is None: anchor = "nw"
    return canvas.create_text(x, y, text=text, font='Sans serif bold', font_size=size, color=color, anchor=anchor)


if __name__ == '__main__':
    main()