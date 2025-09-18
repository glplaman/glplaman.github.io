# 定义
def calc(a, b=0):
    print(a+b)
    return a+b


# 使用
print(calc(10, 20))
print(calc(10))

# 位置传参
# list传递参数：使用*将list的元素转换为对应的实参
li = [12, 23]
calc(*li)

# 关键字传参
# dict传递参数：使用**将dict的元素转换为对应的实参；dict的元素要和函数的形参对应；不多能也不能少
di = {'a': 10, 'b': 200}
calc(**di)
