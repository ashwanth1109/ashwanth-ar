# LIST-STRING CONVERSIONS

s = "Hello world"
l = list(s)  # ['H', 'e', 'l', 'l', 'o', ' ', 'w', 'o', 'r', 'l', 'd']

w = s.split(' ')  # ['Hello', 'world']

L = ['a', 'b', 'c']
s2 = ' '.join(L)  # a b c

print(s2)
