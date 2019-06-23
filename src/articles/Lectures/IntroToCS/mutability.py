# MUTABILITY AND CLONING

a = [1, 2, 3, 4]
b = a

b.append(5)  # a also gets mutated
# hence append is said to have a side effect

c = a[:]  # c is a clone of a
c.append(6)  # only c is mutated

print(a, b, c)
