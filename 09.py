#First solution using for loop
def sum_array(numbers):
  total = 0
  for num in numbers:
    total = num + total
    numbers = total
  return numbers

'''# Second solution using reduce() - Python version
from functools import reduce

def sumArray(numbers):
    return reduce(lambda total, num: total + num, numbers, 0)'''

print(sum_array([1, 2, 3, 4, 5]))

print(sum_array([42]))

print(sum_array([5, -2, 7, -3]))

print(sum_array([203, 145, -129, 6293, 523, -919, 845, 2434]))

print(sum_array([0, 0]))