# GUESS AND CHECK

print('This program finds the cube root of a number')

num = int(input('Enter your number: '))

guess = 0

print(num)

while (guess**3 != num and guess < num):
    guess += 1

print('The cube root is:', guess)
