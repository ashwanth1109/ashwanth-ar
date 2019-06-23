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
