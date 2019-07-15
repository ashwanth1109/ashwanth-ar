# Introduction to Algorithms

Reference: https://ocw.mit.edu/courses/electrical-engineering-and-computer-science/6-006-introduction-to-algorithms-fall-2011/

### Content

[Lecture 1 - Algorithmic Thinking and Peak Finding](#lecture-1)

[Lecture 2 - Models of Computation, Document Distance](#lecture-2)

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

<a id="lecture-1"></a>

<br/>
<br/>
<br/>

## Lecture 1 - Algorithmic Thinking and Peak Finding

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

### Straightforward Algorithm (my solution)

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

### Divide and Conquer Algorithm (my solution)

```py
def findPeak(arr):
    n = arr.__len__()
    if (n > 1):
        if (arr[int(n/2)] < arr[int(n/2)-1]):
            print('in if', arr[int(n/2)], arr[int(n/2)-1])
            findPeak(arr[0:int(n/2)])
        elif (arr[int(n/2)] < arr[int(n/2)+1]):
            print('in el if', arr[int(n/2)], arr[int(n/2)-1])
            findPeak(arr[int(n/2):n])
        else:
            print('Peak exists at index', int(n/2))
```

Worst case complexity: `O(log2(n))`

### Peak Finding - 2d version

A grid with n rows and m columns.

A peak is defined as a cell on the grid that is greater than all 4 surrounding cells.

### The Greedy Ascent Algorithm

- Pick a cell. Any cell. Maybe middle?
- Compare with 4 neighbouring ones - one by one
- If you find something higher jump to it
- Repeat steps till you find a peak

### Divide and Conquer Algorithm

- Pick the middle column
- Find global maximum: O(n)
- Compare with left and right numbers
- If any greater, recursively repeat with half the columns
- Else you have your peak
