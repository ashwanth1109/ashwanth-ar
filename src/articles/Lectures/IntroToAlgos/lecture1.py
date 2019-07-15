# LECTURE 1

a = 1
b = 2
c = 4
d = 3
e = 8
f = 5
g = 9
h = 6
i = 7

sampleArray = [a, b, c, d, e, f, g, h, i]

# print(sampleArray)

# STRAIGHTFORWARD ALGO

# for i in range(sampleArray.__len__()):
#     if (i == 0):
#         if (sampleArray[i] > sampleArray[i+1]):
#             print('Peak exists at index', i)
#     elif (i == sampleArray.__len__() - 1):
#         if (sampleArray[i] > sampleArray[i-1]):
#             print('Peak exists at index', i)
#     else:
#         if (sampleArray[i] > sampleArray[i-1] and sampleArray[i] > sampleArray[i+1]):
#             print(sampleArray[i-1], sampleArray[i], sampleArray[i+1])
#             print('Peak exists at index', i)

n = sampleArray.__len__()
# print(int(n/2))  # 4
# print(sampleArray[1:2])

# Array
# [1, 2, 4, 3, 8, 5, 9, 6, 7]

# DIVIDE AND CONQUER ALGO


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


print(findPeak(sampleArray))
