from PIL import Image
import os
from pathlib import Path

def process_image_to_karel(image_path, output_filename="karel_functions.txt"):
    """
    Converts image pixels into individual Karel function definitions.
    Flips even-numbered rows to match Karel's back-and-forth movement.
    """
    input_path = Path(image_path)
    if not input_path.exists():
        print(f"Error: The file '{image_path}' does not exist.")
        return

    try:
        with Image.open(input_path) as img:
            img = img.convert('RGB')
            width, height = img.size
            
            with open(output_filename, 'w') as f:
                for y in range(height):
                    # Determine if row is odd or even (1-based for the function name)
                    row_num = y + 1
                    row_type = "odd" if row_num % 2 != 0 else "even"
                    
                    # Extract pixel colors for the current row
                    row_colors = []
                    for x in range(width):
                        r, g, b = img.getpixel((x, y))
                        row_colors.append(f"#{r:02x}{g:02x}{b:02x}")
                    
                    # CRITICAL: Invert even rows to match right-to-left movement
                    if row_type == "even":
                        row_colors.reverse()

                    # Write function header
                    f.write(f"def paint_{row_type}_row_{row_num}():\n")
                    
                    # Generate the sequence of paint and move commands
                    for i, color in enumerate(row_colors):
                        f.write(f'    paint_corner("{color}")\n')
                        
                        # Only move if it's NOT the very last pixel of the row
                        if i < len(row_colors) - 1:
                            f.write('    move()\n')
                    
                    f.write("\n") # Space between functions

            print(f"Successfully generated {height} functions for a {width}x{height} image.")
            print(f"File saved as: {output_filename}")

    except Exception as e:
        print(f"An unexpected error occurred: {e}")

if __name__ == "__main__":
    # Configuration - Using raw string for Windows paths
    INPUT_IMAGE = r"c:\Users\Cristian\Desktop\Lota\renderKarel.png"
    OUTPUT_FILE = "karel_functions.txt"
    
    process_image_to_karel(INPUT_IMAGE, OUTPUT_FILE)