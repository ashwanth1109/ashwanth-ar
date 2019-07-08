# Introduction to Algorithms

Reference: https://ocw.mit.edu/courses/electrical-engineering-and-computer-science/6-006-introduction-to-algorithms-fall-2011/

### Focus

- Coming up with efficient procedures for solving large-scale problems
- Scalability because our data sets are only going to get larger
- Classic data structures (search trees, hash tables) & classical algorithms (sorting, matching etc.)
- Real implementations of these data structures and algorithms in python
- Check out problem sets => theory and programming parts to questions

### Modules

- Algorithmic Thinking
- Sorting and Trees
- Hashing
- Numerics
- Graphs
- Shortest Path
- Dynamic Programming
- Complexity Theory, Research etc.

### Peak Finding - One dimensional version

```py
sampleArray = [a, b, c, d, e, f, g, h, i]
```

"b" is considered a peak if and only if:

- "b" is greater than "a"
- "b" is greater than "c"

In the cases of edges such as "a" and "i" you only check the one side.

Problem Statement: Find a peak if it exists

Note: if it was greater than or equal to, then a peak would always exist.

### Straightforward Algorithm

```py
for i in range(sampleArray.__len__()):
    if (i == 0):
        if (sampleArray[i] > sampleArray[i+1]):
            print('Peak exists at index', i)
    elif (i == sampleArray.__len__() - 1):
        if (sampleArray[i] > sampleArray[i-1]):
            print('Peak exists at index', i)
    else:
        if (sampleArray[i] > sampleArray[i-1] and sampleArray[i] > sampleArray[i+1]):
            print(sampleArray[i-1], sampleArray[i], sampleArray[i+1])
            print('Peak exists at index', i)
```

Worst case complexity: `O(n)`

### Divide and Conquer Algorithm
