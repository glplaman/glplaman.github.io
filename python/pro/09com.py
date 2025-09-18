# 比较运算符> < >= <= == !=
# 比较的是值value
a, b = 10, 20
print(a > b)
print(a < b)
print(a == b)
print(a != b)


# 比较标识id：is
# 符号常量是同一存储空间
print(a is b)
a, b = 10, 20/2
print(a, b)
print(a == b)
print(a is b)
a, b = 10, int(20/2)
print(a, b)
print(a == b)
print(a is b)

# 比较数组:每个元素都相同，结果才相同
arr0 = [1, 2, 3]
arr1 = [1, 2, 3]
print(arr0 == arr1)
print(arr0 is arr1)
