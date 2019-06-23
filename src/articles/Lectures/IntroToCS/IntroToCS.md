# Introduction to Computer Science using Python

Reference: https://ocw.mit.edu/courses/electrical-engineering-and-computer-science/6-0001-introduction-to-computer-science-and-programming-in-python-fall-2016

### Focus:

- Represent knowledge with data structures
- iteration and recursion as computational metaphors
- abstraction of procedures and data types
- organize and modularize systems using object classes and methods
- different classes of algorithms, searching and sorting
- complexity of algorithms

### Contents

[Lecture 1 - Machines and Computation](#lecture-1) <br/>
[Lecture 2 - Branching and Iterations](#lecture-2) <br/>
[Lecture 3 - String Manipulation, Guess and Check, Bisection Search](#lecture-3) <br/>
[Lecture 4 - Decomposition, Abstraction and Functions](#lecture-4) <br/>
[Lecture 5 - Tuples, Lists, Aliasing, Mutability & Cloning](#lecture-5) <br/>
[Lecture 6 - Recursion & Dictionaries](#lecture-6) <br/>

<a id="lecture-1"></a>

<br/>
<br/>
<br/>

## Lecture 1 - Machines and Computation

### What does a computer do?

Performs a gigantic amount of calculations and stores the results in memory. Calculations could either be low-level (built into the language - addition etc.) or high-level (as defined by the programmer)

### Types of knowledge

Declarative knowledge - statement of facts
Imperative knowledge - a recipe or sequence of steps

### Basic Machine Architecture

![Basic Machine Architecture](https://bournetocode.com/projects/AQA_A_Theory/pages/img/vonNeumann.gif)

You store both the data and the sequence of instructions in memory. The control flow counter keeps track of which step is being executed. The ALU performs calculations/operations for each step and stores results in memory.

### Basic Primitives

- Turing showed that you can compute anything with 6 basic primitives - move left, right, read, write, scan, do nothing.
- If you can compute something in one language, in theory you can compute it any language (a powerful notion)
- Modern programming languages have more convenient set of primitives
- Can abstract methods to create new primitives
- Once you have your primitives, you can start creating expressions which are combinations of these primitives

### Aspects of languages

#### Syntactical validity:

ENGLISH,

- cat, dog, mouse is syntactically invalid
- cat eat mouse is syntactically valid

PYTHON:

- "hi"5 is syntactically invalid
- 3 + 2 is syntactically valid (operators and operand)

Static Semantics - which syntactically valid strings have meaning

ENGLISH:

- I are hungry is syntactically valid but has static semantic error

PYTHON:

- 3.2 + "hi" is syntactically valid but has static semantic error

Semantics is the meaning associated with a syntactically correct string of symbols with no static semantic errors. Programming languages have only one meaning for an expression but may not be what the developer intended.

### PYTHON

- Everything is an object
- python programs manipulate these data objects
- objects have a type that dictates what kind of operations your program can do on them
- Scalar objects (can't be subdivided) - int, float, bool and NoneType

<a id="lecture-2"></a>

<br/>
<br/>
<br/>

## Lecture 2 - Branching and Iterations

Getting started with python

```py
# HELLO WORLD
msg = "Hello world"
print(msg)

# STRING CONCATENATION
hi = "hello there"
name = "bardock"
greeting = hi + " " + name
print(greeting)

# REPEAT STRING N TIMES
print((greeting + " ") * 3)
```

Nuances of the print statement:

```py
# PRINT - COMMAS AND PLUSES
print("hello", "world")  # O/P => hello world
print("hello" + "world")  # O/P => helloworld
```

Getting input from the user -
Input gives you a string and must be type casted as per the requirement.

```py
text = input("Enter something . . .")
print(text)

# TYPE CASTING
num = int(input('Enter number: '))
print(num*5)
```

### Control Flow

If else statements:

```py
# IF-ELIF-ELSE
x = 1
y = 2
if (x == y):
    print('x and y are equal')
elif ((x + x) == y):
    print('x is twice y')
else:
    print('x is not y or twice y')
```

While

```py
# WHILE
choice = input("You're in the lost forest. Go left (l) or right (r)?")
while choice != 'l':
    choice = input("You're in the lost forest. Go left (l) or right (r)?")
print("You have exited the forest")
```

For

```py
# FOR
for n in range(5): # range(start, stop, step) => start & step optional
    print(n)
```

<a id="lecture-3"></a>

<br/>
<br/>
<br/>

## Lecture 3 - String Manipulation, Guess and Check, Bisection Search

### String Manipulation

Strings are immutable. Reassignment results in new string stored in a new place in memory storage.

Len is a function that returns the length of the string being passed into it: `len(str)`

Indexing will get you the value at a certain index/position: `s[2]`

Substring by slicing into a string: `s[start:stop:step]` (stop and step are optional)

### Guess and Check

```py
# only works for whole number inputs
print('This program finds the cube root of a number')
num = int(input('Enter your number: '))

guess = 0
while (guess**3 != num and guess < num):
    guess += 1

print('The cube root is:', guess)

# you can change step size but it will still fail for some numbers
```

### Bisection Search

```py
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
```

For `N` numbers, the search space is originally `N`.

After the first guess it becomes `N/2`

After the second guess it becomes `N/4`

After the kth guess it becomes `N/(2^k)`

If the kth guess is the final answer, then that means there is only one value in that interval (in the worst case scenario).

`N/(2^k) = 1` => `k=log2(N)`

For an N of 100, log2(100) is less than 7. So bisection search takes less than 7 guesses maximum as opposed to 100 guesses worst case with the guess and check method.

<a id="lecture-4"></a>

<br/>
<br/>
<br/>

## Lecture 4 - Decomposition, Abstraction & Functions

Functions are a mechanism to achieve decomposition and abstraction. Abstraction is the idea of using some functionality without knowing how it's being done. Decomposition is the idea of taking different inputs, performing the same operation and giving back different outputs.

We divide code into modules that are:

- self contained
- used to break up code
- reusable
- keep code organized
- keep code coherent

You can achieve decomposition with functions or classes.

```py
# VARIABLE SCOPE

def f(x): # FUNCTION SCOPE
    x=x+1
    print('inside function, x is', x) # 4
    return x

x = 3 # GLOBAL SCOPE
z = f(x)
print('outside function, x is', x) # 3
print('z is',z) # 4
```

If no return statement is provided, python automatically provides one for you. It returns `None` => special type.

Python lets you access a variable defined outside but not modify it inside the function.

```py
# NON FUNCTIONAL PROGRAMMING - UnboundLocalError
a = 5

def fun2():
    print('value of a before increment', a)
    a += 1
    print('value of a after increment', a)


print('value of a in global before function call', a)
fun2()
print('value of a in global after function call', a)
```

<a id="lecture-5"></a>

<br/>
<br/>
<br/>

## Lecture 5 - Tuples, Lists, Aliasing, Mutability, and Cloning

### Tuples

- hold collections of data
- Immutable like strings
- represented with parantheses: `t = (1, 2, "hi")`
- access them with indices: `t[0]` => 1
- `(1, 2, 'hi')` + `(3, 4)` => `(1, 2, 'hi', 3, 4)`
- `t[1:2]` => `('hi',)` comma indicates a tuple with one element
- `t[1] = 4` => python doesnt allow this since tuples are immutable
- (x, y) = (y, x) => swaps variables

```py
# TUPLES IN FUNCTIONS

def quotient_and_remainder(x, y):
    q = x // y # integer division
    r = x % y
    return (q, r) # the values get returned in the context of the tuple


(quot, rem) = quotient_and_remainder(4, 5)
print('quotient is ', quot)
print('remainder is', rem
```

```py
# MANIPULATING TUPLES

tupleA = ((1, 'A'), (2, 'B'), (3, 'B'))


def get_data(tupleA):
    nums = ()  # empty tuple
    words = ()

    for t in tupleA:
        nums = nums + (t[0],)  # singleton tuple
        if t[1] not in words:
            words = words + (t[1],)  # only unique strings

    min_n = min(nums)
    max_n = max(nums)
    unique_words = len(words)

    return (min_n, max_n, unique_words)


print(get_data(tupleA))
```

### Lists

- Lists are mutable objects unlike Tuples
- represented with square brackets
- Since they are mutable, you can have more than one variable pointing to the same object in memory
- Important to worry about side effects when dealing with lists

```py
# MANIPULATING LISTS

L = [2, 1, 3]
L.append(5) # [2, 1, 3, 5]

L1 = [0, 6]
L.extend(L1)  # [2, 1, 3, 5, 0, 6]

del(L[1]) # [2, 3, 5, 0, 6]

a = L.pop()  # [2, 3, 5, 0] a is 6

L.remove(2)  # [3, 5, 0]
```

### List-String conversions

```py
s = "Hello world"
l = list(s)  # ['H', 'e', 'l', 'l', 'o', ' ', 'w', 'o', 'r', 'l', 'd']

w = s.split(' ')  # ['Hello', 'world']

L = ['a', 'b', 'c']
s2 = ' '.join(L)  # a b c
```

### Mutability and Cloning

```py
# MUTABILITY AND CLONING

a = [1, 2, 3, 4]
b = a

b.append(5)  # a also gets mutated
# hence append is said to have a side effect

c = a[:]  # c is a clone of a
c.append(6)  # only c is mutated
```

Avoid mutating a list. If you are iterating over a list and remove items, Python does not update counter. Better to clone.

Side Note: Remember Rich Hickey's talk on 'The Value of values'

<a id="lecture-6"></a>

<br/>
<br/>
<br/>

## Lecture 6 - Recursion and Dictionaries

Recursion is the process of repeating things in a self-similar way. It is the idea of taking a problem and reducing it to a simpler version of that same problem.

Algorithmically - advocates a way of designing solutions to problems with the divide-and-conquer approach.

Semantically - a programming technique where a function calls itself

- it must have one or more base cases that are easy to solve (to avoid infinite recursion)
- must solve the same problem on some other input with the goal of simplifying the larger problem input
- it may be simpler and more intuitive from a dev POV
- may or may not be more efficient (depends on the situation)

### Comparing Iteration and Recursion using Multiplication

```py
# SOLVING MULTIPLICATION THRU ITERATION

a = 5
b = 8

# multiplication operator is not allowed
result1 = 0

for i in range(b):
    result1 += a

print(result1)  # 40
```

When converting this problem to a recursion problem we need to break down our first task into base cases that repeat.

We define a \* b as (a + a + a + ... b times) which can be redefined as a + (a + a + a + ... b - 1 times) or a + (a \* (b - 1)).
So we've taken one problem and redefined it as a simpler version of the same problem. We also have to identify our base case to prevent infinite recursion. In this case, it is when b has been reduced to 1 at which point, we have to just return a.

```py
def mult(a, b):
    if (b == 1):  # base case
        return a
    else:
        return a + mult(a, b - 1)  # recursive step


print(mult(5, 8))  # 40
```

### Factorial using Recursion

```py
# FACTORIAL USING RECURSION

def factorial(n):
    if (n == 1):
        return 1
    else:
        return n * factorial(n - 1)


print(factorial(10))  # 3628800
```

### Towers of Hanoi using Recursion

```py
# TOWERS OF HANOI


def print_move(fr, to):
    print('move disc from', str(fr), 'to', str(to))


def hanoi_towers(n, fr, to, spare):
    if (n == 1):
        print_move(fr, to)
    else:
        hanoi_towers(n-1, fr, spare, to)
        hanoi_towers(1, fr, to, spare)
        hanoi_towers(n-1, spare, to, fr)


hanoi_towers(4, 1, 3, 2)

'''
move disc from 1 to 2
move disc from 1 to 3
move disc from 2 to 3
move disc from 1 to 2
move disc from 3 to 1
move disc from 3 to 2
move disc from 1 to 2
move disc from 1 to 3
move disc from 2 to 3
move disc from 2 to 1
move disc from 3 to 1
move disc from 2 to 3
move disc from 1 to 2
move disc from 1 to 3
move disc from 2 to 3
'''
```

### Fibonacci sequence using recursion

```py
# FIBONACCI SEQUENCE

def fib(n):  # find nth element in sequence
    if (n == 0 or n == 1):  # 0th and 1st element in sequence are 1
        return 1
    else:
        return fib(n-1) + fib(n-2)


print(fib(10))  # 89
```

### Palindrome using recursion

```py
# PALINDROME USING RECURSION

def palin(str):
    if (len(str) <= 1):
        return True
    else:
        return str[0] == str[-1] and palin(str[1:-1])


print(palin('deified'))  # True
print(palin('racecar'))  # True
print(palin('test'))  # False
```

### Dictionaries

- keys need to be unique
- keys need to immutable type

```py
# DICTIONARIES

pokemon = {
    'Greninja': 'water/dark',
    'Arceus': 'normal',
    'Mew': 'psychic',
    'Pikachu': 'electric',
    'Charizard': 'fire/flying',
    'Genesect': 'bug/steel'
}

print(pokemon['Charizard'])  # fire/flying

pokemon['Rayquaza'] = 'dragon/flying'  # adds an entry

print('Charizard' in pokemon)  # True

del(pokemon['Mew'])

print(pokemon.keys())
print(pokemon.values())

# print(pokemon)

```

### Improving Fibonacci by using a dictionary

When we did the fibonacci problem using recursion, it was an in-efficient solution to the problem because there were several recalculations of the same number. We can use a dictionary to solve this inefficiency by storing previously calculated values. This is known as memoization.

```py
# MEMOIZING FIBONACCI USING A DICTIONARY


def fib(n):
    computed = {
        1: 1,
        2: 1
    }

    def fib_eff(n):
        if n in computed:
            return computed[n]
        else:
            result = fib(n - 1) + fib(n - 2)
            computed[n] = result
            return result
    return fib_eff(n)


print(fib(20))  # 6765
```

## Lecture 7 - Testing, Debugging, Exceptions and Assertions

### Defensive Programming

- Modularize your code & write specifications for these functions
- Provide your module with a bunch of inputs and confirm if you get the output you expect (assertions)

### Testing/Validation

- Compare input/output pairs to specification
- Think along the lines of 'How can I break my program?'

### Debugging

- Study events leading up to an error
- Think along the lines of 'Why did it break and how do I fix it?'

### Classes of Tests

- Unit Testing: (1) validate each piece of program (2) test each functions separately
- Regression Testing: (1) add tests for bugs as you find them (2) catch reintroduced errors that were previously fixed
- Integration Testing: does the overall program work?

### Testing Approaches

- Intuition about natural boundaries to the problem. Look for extremes that you think should be tested
- Random Testing. More tests mean more assurance.
- Black Box Testing: Explore paths through specification
- Glass Box Testing: Explore paths through code

### Glass Box Testing

- Use the code to guide your test cases
- testing is considered path-complete if all paths have been tested for
- conditionals: cover all parts
- loops: no loop, one loop, many loops cases
- drawbacks - there could be missing paths

### Exceptions

```py
# EXCEPTIONS

try:
    a = int(input('Enter number 1: '))
    b = int(input('Enter number 2: '))
    print('sum', a+b)
except ValueError:
    print('enter a number')
except:
    print('something went wrong')

# NO EXCEPTION HANDLING

c = int(input('Enter number 1: '))
d = int(input('Enter number 2: '))
print('sum', c+d)

'''
Traceback (most recent call last):
  File "exceptions.py", line 11, in <module>
    c = int(input('Enter number 1: '))
ValueError: invalid literal for int() with base 10: 's'
Error in sys.excepthook:
Traceback (most recent call last):
  File "/usr/lib/python3/dist-packages/apport_python_hook.py", line 63, in apport_excepthook
    from apport.fileutils import likely_packaged, get_recent_crashes
  File "/usr/lib/python3/dist-packages/apport/__init__.py", line 5, in <module>
    from apport.report import Report
  File "/usr/lib/python3/dist-packages/apport/report.py", line 30, in <module>
    import apport.fileutils
  File "/usr/lib/python3/dist-packages/apport/fileutils.py", line 23, in <module>
    from apport.packaging_impl import impl as packaging
  File "/usr/lib/python3/dist-packages/apport/packaging_impl.py", line 24, in <module>
    import apt
  File "/usr/lib/python3/dist-packages/apt/__init__.py", line 23, in <module>
    import apt_pkg
ModuleNotFoundError: No module named 'apt_pkg'

Original exception was:
Traceback (most recent call last):
  File "exceptions.py", line 11, in <module>
    c = int(input('Enter number 1: '))
ValueError: invalid literal for int() with base 10: 's'
'''
```

You can also have `else` and `finally` clauses. Else executes when the try body completes with no exceptions. Finally always executes after everything else is done.
