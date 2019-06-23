# # RECURSION

# # SOLVING MULTIPLICATION THRU ITERATION

# a = 5
# b = 8

# # multiplication operator is not allowed
# result1 = 0

# for i in range(b):
#     result1 += a

# print(result1)  # 40

# # SOLVING MULTIPLICATION THROUGH RECURSION


# def mult(a, b):
#     if (b == 1):  # base case
#         return a
#     else:
#         return a + mult(a, b - 1)  # recursive step


# print(mult(5, 8))  # 40


# # FACTORIAL USING RECURSION

# def factorial(n):
#     if (n == 1):
#         return 1
#     else:
#         return n * factorial(n - 1)


# print(factorial(10))  # 3628800

# # TOWERS OF HANOI


# def print_move(fr, to):
#     print('move disc from', str(fr), 'to', str(to))


# def hanoi_towers(n, fr, to, spare):
#     if (n == 1):
#         print_move(fr, to)
#     else:
#         hanoi_towers(n-1, fr, spare, to)
#         hanoi_towers(1, fr, to, spare)
#         hanoi_towers(n-1, spare, to, fr)


# hanoi_towers(4, 1, 3, 2)

# '''
# move disc from 1 to 2
# move disc from 1 to 3
# move disc from 2 to 3
# move disc from 1 to 2
# move disc from 3 to 1
# move disc from 3 to 2
# move disc from 1 to 2
# move disc from 1 to 3
# move disc from 2 to 3
# move disc from 2 to 1
# move disc from 3 to 1
# move disc from 2 to 3
# move disc from 1 to 2
# move disc from 1 to 3
# move disc from 2 to 3
# '''

# # FIBONACCI SEQUENCE

# def fib(n):  # find nth element in sequence
#     if (n == 0 or n == 1):  # 0th and 1st element in sequence are 1
#         return 1
#     else:
#         return fib(n-1) + fib(n-2)


# print(fib(10))  # 89

# PALINDROME USING RECURSION

def palin(str):
    if (len(str) <= 1):
        return True
    else:
        return str[0] == str[-1] and palin(str[1:-1])


print(palin('deified'))  # True
print(palin('racecar'))  # True
print(palin('test'))  # False
