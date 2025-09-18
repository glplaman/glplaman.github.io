# while：初始变量、条件判断、循环题
i, sum = 0, 0
while i <= 100:
    sum += i
    i += 1

print(sum)


#
i, sum = 0, 0
while i <= 100:
    if i % 2 == 0:
        sum += i
    i += 1

print(sum)
