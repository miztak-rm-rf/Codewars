def collatz(n):
    result = [n]
    while n!=1:
        if n%2==0:
            n = n//2
            result.append(n)
        else:
            n = n*3+1
            result.append(n)
    return len(result)
