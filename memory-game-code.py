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
GALLERY_WIDTH = 300       # High-res study size
GALLERY_HEIGHT = 300      # High-res study size

# CANVAS dimensions
CANVAS_WIDTH = STANDARD_CARD_SIZE * ROUND_ROWS + (GAP*(ROUND_ROWS+1))
CANVAS_HEIGHT = STANDARD_CARD_SIZE * ROUND_COLUMNS + (GAP*(ROUND_COLUMNS+1)) + EMPTY_Y_SPACE

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
        self.current_round = 1    # 1 = Round 1, 2 = Round 2, 3 = Gallery Mode      
        self.round_1_complete = False    
        self.round_2_complete = False   
        
        # Game Metric Scores
        self.round_1_score = 0
        self.round_2_score = 0
        
        # Element pointers for text updates
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

    game_state.r1_ui_pairs = None
    game_state.r1_ui_console = None
    game_state.r2_ui_pairs = None
    game_state.r2_ui_console = None
    game_state.gal_ui_pairs = None
    game_state.gal_ui_console = None

    if game_state.current_round == 1:
        text = f"Round 1:  {game_state.round_1_score}/{PAIRS_PER_ROUND} Pairs"
        if not game_state.round_1_complete:
            console_text = "🔍 Match each concept with its visual representation."
        else:
            console_text = "🎉 Round 1 Complete! Round 2 is now unlocked."
        game_state.r1_ui_pairs = create_message(canvas, CANVAS_WIDTH - SPACE_X_RIGHT_UI_PAIRS, SPACE_Y_UI_PAIRS_UI_CONSOLE, text, 18, MAIN_TEXT)
        game_state.r1_ui_console = create_message(canvas, 10, SPACE_Y_UI_PAIRS_UI_CONSOLE, console_text, 18, MAIN_TEXT)

    elif game_state.current_round == 2:
        text = f"Round 2:  {game_state.round_2_score}/{PAIRS_PER_ROUND} Pairs"
        if not game_state.round_2_complete:
            console_text = "🔍 Match each concept with its visual representation."
        else:
            console_text = "🎉 Congratulations! Study Mode is now unlocked."
        game_state.r2_ui_pairs = create_message(canvas, CANVAS_WIDTH - SPACE_X_RIGHT_UI_PAIRS, SPACE_Y_UI_PAIRS_UI_CONSOLE, text, 18, MAIN_TEXT)
        game_state.r2_ui_console = create_message(canvas, 10, SPACE_Y_UI_PAIRS_UI_CONSOLE, console_text, 18, MAIN_TEXT)

    else:
        total_available = len(game_state.gallery_pairs_list)
        text = f"Reviewing Pair: {game_state.gallery_index + 1}/{total_available}"
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

    ui_map = {
        "reset_zone": reset_zone,
        "r1_zone": r1_zone,
        "r2_zone": r2_zone,
        "gal_zone": gal_zone,
        "prev_zone": None, 
        "next_zone": None
    }

    return ui_map


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
        
        print(f"🖼️ Displaying Gallery Pair [{state.gallery_index + 1}]: Description Asset -> '{current_pair['text_card'].asset_path}' | Illustration Asset -> '{current_pair['img_card'].asset_path}'")
    else:
        for card in state.deck:
            if card.execution_round == state.current_round:
                card.draw(canvas, STANFORD_CARD_FACE_DOWN)


def render_gallery_pagination_buttons(canvas, state, ui):
    button_w = 24
    button_h = 24

    current_pair = state.gallery_pairs_list[state.gallery_index]
    img_card = current_pair["img_card"]

    button_y = img_card.y_initial + (GALLERY_HEIGHT / 2) - (button_h / 2)
    
    if state.gallery_index > 0:
        prev_x = img_card.x_initial - 40 - button_w
        canvas.create_image(prev_x, button_y, SHOW_PREVIOUS_IMG)
        ui["prev_zone"] = {
            "x_initial": prev_x, 
            "y_initial": button_y, 
            "x_final": prev_x + button_w, 
            "y_final": button_y + button_h
        }
    else:
        ui["prev_zone"] = None

    if state.gallery_index < len(state.gallery_pairs_list) - 1:
        text_card = current_pair["text_card"]
        next_x = text_card.x_final + 40
        canvas.create_image(next_x, button_y, SHOW_NEXT_IMG)
        ui["next_zone"] = {
            "x_initial": next_x, 
            "y_initial": button_y, 
            "x_final": next_x + button_w, 
            "y_final": button_y + button_h
        }
    else:
        ui["next_zone"] = None


def memory_game_logic(canvas, state, ui):
    while True:
        # Pass and receive the updated UI mapping configuration continuously
        first_card, ui = get_clicked_card(canvas, state, ui)
        if first_card == "RESET": return 
        if first_card == "CHANGE_ROUND": continue 

        if state.current_round == 3:
            continue

        first_card.is_revealed = True
        first_card.draw(canvas, STANFORD_CARD_FACE_DOWN)
        
        second_card, ui = get_clicked_card(canvas, state, ui, first_card)
        if second_card == "RESET": return
        if second_card == "CHANGE_ROUND":
            if first_card and not isinstance(first_card, str):
                first_card.is_revealed = False
                first_card.draw(canvas, STANFORD_CARD_FACE_DOWN)
            continue

        second_card.is_revealed = True
        second_card.draw(canvas, STANFORD_CARD_FACE_DOWN)

        if first_card.base_concept == second_card.base_concept:          
            first_card.is_matched = True
            second_card.is_matched = True
            
            if state.current_round == 1:
                state.round_1_score += 1
                current_score = state.round_1_score
                canvas.change_text(state.r1_ui_pairs, f"Pairs found: {current_score}/{PAIRS_PER_ROUND}")
                canvas.change_text(state.r1_ui_console, "✅ Excellent! You found a pair.")
            else:
                state.round_2_score += 1
                current_score = state.round_2_score
                canvas.change_text(state.r2_ui_pairs, f"Pairs found: {current_score}/{PAIRS_PER_ROUND}")
                canvas.change_text(state.r2_ui_console, "✅ Excellent! You found a pair.")
            
            time.sleep(0.5)

            if current_score == PAIRS_PER_ROUND:
                if state.current_round == 1:
                    state.round_1_complete = True
                    canvas.change_text(state.r1_ui_console, "🎉 Round 1 Complete! Round 2 is now unlocked.")
                    ui = render_window_chrome(canvas, state)
                    draw_active_scene(canvas, state, ui)
                else:
                    state.round_2_complete = True
                    canvas.change_text(state.r2_ui_console, "🎉 Congratulations! Study Mode unlocked.")
                    ui = render_window_chrome(canvas, state)
                    draw_active_scene(canvas, state, ui)
        else:
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
        click_x = click[0]
        click_y = click[1]

        if (ui["reset_zone"]["x_initial"] <= click_x <= ui["reset_zone"]["x_final"]) and \
           (ui["reset_zone"]["y_initial"] <= click_y <= ui["reset_zone"]["y_final"]):
            print("user clicked on the reset button")
            return "RESET", ui

        if (ui["r1_zone"]["x_initial"] <= click_x <= ui["r1_zone"]["x_final"]) and \
           (ui["r1_zone"]["y_initial"] <= click_y <= ui["r1_zone"]["y_final"]):
            if state.current_round != 1:
                state.current_round = 1
                ui = render_window_chrome(canvas, state)
                update_board_layout_coordinates(state)
                draw_active_scene(canvas, state, ui)
                return "CHANGE_ROUND", ui

        if (ui["r2_zone"]["x_initial"] <= click_x <= ui["r2_zone"]["x_final"]) and \
           (ui["r2_zone"]["y_initial"] <= click_y <= ui["r2_zone"]["y_final"]):
            if not state.round_1_complete:
                canvas.change_text(state.r1_ui_console, "Complete Round 1 to unlock Round 2.")
                continue
            elif state.current_round != 2:
                state.current_round = 2
                ui = render_window_chrome(canvas, state)
                update_board_layout_coordinates(state)
                draw_active_scene(canvas, state, ui)
                return "CHANGE_ROUND", ui

        if (ui["gal_zone"]["x_initial"] <= click_x <= ui["gal_zone"]["x_final"]) and \
           (ui["gal_zone"]["y_initial"] <= click_y <= ui["gal_zone"]["y_final"]):
            if not state.round_2_complete:
                if state.current_round == 1:
                    canvas.change_text(state.r1_ui_console, "Complete both rounds to unlock Study Mode.")
                elif state.current_round == 2:
                    canvas.change_text(state.r2_ui_console, "Complete both rounds to unlock Study Mode.")
                continue
            elif state.current_round != 3:
                state.current_round = 3
                ui = render_window_chrome(canvas, state)
                update_board_layout_coordinates(state)
                draw_active_scene(canvas, state, ui)
                return "CHANGE_ROUND", ui

        if state.current_round == 3:
            if ui["prev_zone"] and (ui["prev_zone"]["x_initial"] <= click_x <= ui["prev_zone"]["x_final"]) and \
               (ui["prev_zone"]["y_initial"] <= click_y <= ui["prev_zone"]["y_final"]):
                state.gallery_index -= 1
                ui = render_window_chrome(canvas, state)
                update_board_layout_coordinates(state)  
                draw_active_scene(canvas, state, ui)
                continue 
            
            if ui["next_zone"] and (ui["next_zone"]["x_initial"] <= click_x <= ui["next_zone"]["x_final"]) and \
               (ui["next_zone"]["y_initial"] <= click_y <= ui["next_zone"]["y_final"]):
                state.gallery_index += 1
                ui = render_window_chrome(canvas, state)
                update_board_layout_coordinates(state)  
                draw_active_scene(canvas, state, ui)
                continue
                
            continue 

        is_card_selected = False
        for card in state.deck:
            if card.execution_round == state.current_round and card.is_clicked(click_x, click_y):
                is_card_selected = True
                
                if card.is_matched:
                    if state.current_round == 1:
                        canvas.change_text(state.r1_ui_console, "This pair has already been completed.")
                    else:
                        canvas.change_text(state.r2_ui_console, "This pair has already been completed.")
                    break 
                    
                if first_card and card.index == first_card.index:
                    if state.current_round == 1:
                        canvas.change_text(state.r1_ui_console, "Choose a different card.")
                    else:
                        canvas.change_text(state.r2_ui_console, "Choose a different card.")
                    break 
                
                if state.current_round == 1:
                    canvas.change_text(state.r1_ui_console, "🔍 Match each concept with its visual representation.")
                else:
                    canvas.change_text(state.r2_ui_console, "🔍 Match each concept with its visual representation.")
                return card, ui

        if not is_card_selected:
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


'''
Here is a high-level summary of the architectural and operational logic driving your memory game. We've built it using a clean, object-oriented approach coupled with an explicit state machine to handle the rendering transitions seamlessly.

🏗️ 1. Core Data Architecture & State Management
The Card Object (Card): Instead of handling raw strings or tracking coordinates in loose arrays, each card is its own self-contained object. It stores its own assets (text vs. image), execution round, state (hidden, revealed, matched), and dynamically updates its own bounding boxes (x_initial, y_initial, etc.) depending on the active layout mode.

Centralized Game State (GameState): A single class holds the source of truth for the entire application session. It tracks the score metrics, completion status flags for each round, the active view mode (Round 1, Round 2, or Gallery Mode), and handles references to text elements to allow on-the-fly updates without screen flickering.

🔀 2. Deck Segregation & Layout Logic
Determined Deck Split: The deck logic takes a flat array of concepts and their corresponding visual illustrations, pairs them up, and splits them cleanly down the middle. Twelve unique concepts (24 cards) are assigned exclusively to Round 1, and the remaining 12 concepts are funneled into Round 2.

Dynamic Coordinate Mapping: We decoupled coordinates from card instantiation. The game loop calls a layout function that calculates the geometric grid positioning on demand. If the game is in standard matching mode, it scales cards down into a compact grid. If the game enters Gallery Mode, it instantly recalculates coordinates to position the active pair into a centered, high-resolution layout view.

🔄 3. The Unifying Game Loop (memory_game_logic)
The matching system is handled sequentially by a robust state machine that waits for user interaction:

First Card Selection: The system enters a blocking click loop until a valid, unrevealed card belonging to the active round is selected.

State Assessment Interception: During that blocking loop, if the user clicks on a persistent top-navigation button (Reset, Round 1, Round 2, Gallery Mode), the selection is intercepted, state flags are updated, and the layout engine recalculates the entire UI.

Second Card Selection: If a first card is successfully chosen, it flips over, and the game enters a second blocking loop to wait for a companion card.

Evaluation & Verification:

If they match: The cards are permanently flagged as is_matched, score metrics increment, and text fields update. If a round reaches 12 pairs, it sets a milestone completion flag, unlocking subsequent game modes.

If they mismatch: The UI temporarily freezes for 1.0 seconds using an explicit delay timer so the player can process the error before both cards dynamically flip face-down again.

🖼️ 4. The Gallery Mode Pagination Engine
Once standard gameplay is cleared, the system converts from a matching puzzle into an educational review tool.

Boundary-Relative Coordinates: Instead of hardcoding pagination buttons to absolute pixel values on the canvas, the button positions are dynamically calculated relative to the boundaries of the high-resolution cards.

State-Driven UI Bounds: The application reads the index position inside the paired array. If the user is on the first card, the "Previous" arrow coordinate map is completely removed from memory, preventing out-of-bounds selection errors. The moment a user clicks a valid navigation arrow, the event loop passes back the newly mutated dictionary limits, ensuring click boundaries match what is visually drawn on the screen.
'''