# for-in：遍历序列或串，即：遍历的对象必须是可迭代的
arr = range(10)
for i in arr:
    print(i)

name = 'cnplaman'
for i in name:
    print(i)

# 如果使用不到自变量i，只是单纯的执行遍历，可以用_代替i
for _ in 'cnplaman':
    print('welcome')


# 求和
sum = 0
for i in range(101):
    if i % 2 == 0:
        sum += i
print(sum)


# 水仙花：个位***3 + 十位***3 + 百位***3 = 原来的数字
for i in range(100, 1000):
    ge = i % 10
    shi = i//10 % 10
    bai = i // 100
    if ((ge**3)+(shi**3)+(bai**3)) == i:
        print(i)
