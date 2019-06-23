# TUPLES AND LISTS

# # TUPLES IN FUNCTIONS

# def quotient_and_remainder(x, y):
#     q = x // y
#     r = x % y
#     return (q, r)


# (quot, rem) = quotient_and_remainder(4, 5)
# print('quotient is ', quot)
# print('remainder is', rem)

# # MANIPULATING TUPLES

# tupleA = ((1, 'A'), (2, 'B'), (3, 'B'))


# def get_data(tupleA):
#     nums = ()  # empty tuple
#     words = ()

#     for t in tupleA:
#         nums = nums + (t[0],)  # singleton tuple
#         if t[1] not in words:
#             words = words + (t[1],)  # only unique strings

#     min_n = min(nums)
#     max_n = max(nums)
#     unique_words = len(words)

#     return (min_n, max_n, unique_words)


# print(get_data(tupleA))


# MANIPULATING LISTS

L = [2, 1, 3]
L.append(5)

L1 = [0, 6]
L.extend(L1)  # [2, 1, 3, 5, 0, 6]

del(L[1])  # [2, 3, 5, 0, 6]

a = L.pop()  # [2, 3, 5, 0] a is 6

L.remove(2)  # [3, 5, 0]

print(L)
