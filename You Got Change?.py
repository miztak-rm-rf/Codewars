def give_change(money): 
    arr = []
    for i in [100, 50, 20, 10, 5, 1]:
        arr = [money // i] + arr
        money -= arr[0] * i
    return tuple(arr)
