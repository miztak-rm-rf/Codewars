def nb_year(p0, percent, aug, p):
    count = 0
    while True:
        if p0 >= p:
            break
        p0 = int(p0+ (p0*(percent/100)+aug))
        count+=1
    return count
