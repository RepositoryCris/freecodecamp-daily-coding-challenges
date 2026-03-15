import re

def is_valid_hsl(hsl):
    pattern = r'^hsl\(\s*(\d{1,3})\s*,\s*(\d{1,3})%\s*,\s*(\d{1,3})%\s*\)\s*;?$'
    match = re.match(pattern, hsl, re.IGNORECASE)
    
    if not match:
        return False
    
    h = int(match.group(1))
    s = int(match.group(2))
    l = int(match.group(3))
    
    return 0 <= h <= 360 and 0 <= s <= 100 and 0 <= l <= 100

# Test cases
print(is_valid_hsl("hsl(240, 50%, 50%)"))
print(is_valid_hsl("hsl( 200 , 50% , 75% )"))
print(is_valid_hsl("hsl(99,60%,80%);"))
print(is_valid_hsl("hsl(0, 0%, 0%) ;"))
print(is_valid_hsl("hsl(  10  ,  20%   ,  30%   )    ;"))
print(is_valid_hsl("hsl(361, 50%, 80%)"))
print(is_valid_hsl("hsl(300, 101%, 70%)"))
print(is_valid_hsl("hsl(200, 55%, 75)"))
print(is_valid_hsl("hsl (80, 20%, 10%)"))