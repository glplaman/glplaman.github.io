# continue：结束本次循环，开始下一次循环
# 1-100之间5的倍数
for i in range(51):
    if i % 5 == 0:
        print(i)


# 使用continue实现
for i in range(51):
    if i % 5 != 0:
        continue
    else:
        print(i)
