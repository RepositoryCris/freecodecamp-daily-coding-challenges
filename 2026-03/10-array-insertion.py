def insert_into_array(arr, value, index):
    start = arr[0:index]
    end = arr[index:]
    arr = start + [value] + end
    return arr

print(insert_into_array([2, 4, 8, 10], 6, 2))
print(insert_into_array(["the", "quick", "fox"], "brown", 2))
print(insert_into_array([], 0, 0))
print(insert_into_array([0, 1, 1, 2, 3, 8, 13], 5, 5))