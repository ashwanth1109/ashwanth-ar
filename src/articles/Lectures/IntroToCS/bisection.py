# Bisection search

num = int(input('Enter number between 0 and 100: '))

guess = 50
lower = 0
higher = 100
count = 0

while (guess != num):
    if (guess < num):
        lower = guess
        guess = int((guess + higher)/2)
        print('guess is lower than number. New guess', guess)
    else:
        higher = guess
        guess = int((guess + lower)/2)
        print('guess is higher than than number. New guess', guess)
    count += 1

print('The number entered was', guess,
      'and was guessed in', count, 'iterations')
