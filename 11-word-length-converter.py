def convert_words(s):
    # Split the sentence into individual words
    words = s.split()
    
    # Create a list to store the length of each word
    word_lengths = []
    
    # Get the length of each word and convert to string
    for word in words:
        length = len(word)
        word_lengths.append(str(length))
    
    # Join all the lengths with spaces
    result = ' '.join(word_lengths)
    
    return result

# Test the function with different sentences
print(convert_words("hello world"))
print(convert_words("Thanks and happy coding"))
print(convert_words("The quick brown fox jumps over the lazy dog"))
print(convert_words("Lorem ipsum dolor sit amet consectetur adipiscing elit donec ut ligula vehicula iaculis orci vel semper nisl"))