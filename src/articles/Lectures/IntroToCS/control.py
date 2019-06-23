# CONTROL FLOW

# # IF-ELIF-ELSE
x = 1
y = 2
if (x == y):
    print('x and y are equal')
elif ((x + x) == y):
    print('x is twice y')
else:
    print('x is not y or twice y')

# # WHILE
choice = input("You're in the lost forest. Go left (l) or right (r)?")
while choice != 'l':
    choice = input("You're in the lost forest. Go left (l) or right (r)?")
print("You have exited the forest")

# FOR
for n in range(5):
    print(n)
