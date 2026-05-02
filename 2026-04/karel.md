# 🎨 Karel Image Painter

## What it does

Converts any image into Karel code that paints it pixel by pixel.

The image processor looks at your picture pixel by pixel, captures the exact color of each one, and automatically generates Karel functions. When you run the code, Karel paints the entire image from scratch — just like a printer, but pixel by pixel.

⚠️ **Important:** Keep your image **smaller than 150×150 pixels**. The bigger the image, the slower Karel runs. For the best experience, use **120×120 pixels or less**

💡 **Technical note:** Python automatically reverses even rows to match Karel's zigzag movement (left-to-right on odd rows, right-to-left on even rows).

### 🛠️ 1. Requirements

- Python 3
- Pillow library: `pip install pillow` (Install this library in your terminal)
- Stanford Karel (Code in Place)

### 🖼️ 2. Run the converter (RGB to Hex)

The script uses Python's Pillow library to read an image pixel by pixel. Each pixel's RGB color is converted to a hex code (e.g., #ff6b35). The script then generates a Karel function per row, with one `paint_corner()` command per pixel. To match Karel's snake-like movement, even rows are automatically reversed. The output is a ready-to-use text file.

```python
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

# Use it
process_image_to_karel(r"C:\your_image.png") #put the direction of your image
```

### 🧩 3. Assemble in Karel - Code in Place Stanford

- Click on `Edit World` and place Karel in the top-left corner of the world.
- Make sure to resize your Karel World so it matches your image's dimensions in pixels.
- Copy this template and paste your generated functions inside:

```python
from karel.stanfordkarel import *

def main():
  paint_odd_row_1()
  go_down_right_side()

  paint_even_row_2()
  go_down_left_side()

  # ... repeat for all rows ...

# ⬇️ Paste your generated paint_... functions here ⬇️

def go_down_right_side():
  turn_right()
  move()
  turn_right()

def go_down_left_side():
  turn_left()
  if front_is_clear():
    move()
    turn_left()

def turn_right():
  for i in range(3):
    turn_left()
```

### ✅ 4. Run & enjoy

Karel will paint your image — one pixel at a time. Just be patient.

### 📌 Tips

| Issue                             | Fix                                                            |
| --------------------------------- | -------------------------------------------------------------- |
| Image too large (150×150 pixels)  | Make it smaller — Karel will run much faster                   |
| Karel says "function not defined" | Copy **all** generated functions from the `.txt` file          |
| Colors look wrong in the painting | Make sure your image uses simple RGB colors (no transparency)  |
| Karel gets stuck mid-way          | Check that your `main()` calls match all generated row numbers |

### 🎉 Done

That's it. Feed any image, run the script, paste it into Karel, and watch the magic. 🚀
