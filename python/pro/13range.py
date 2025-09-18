# range()生成一个序列，利用list()查看；可以使用in或not in查看某个元素是否在序列中
# range(num)：默认从0开始，步进为1，生成的序列为[0,num-1]
num = range(10)
print(list(num))


# range(start,stop):从start开始，到stop-1
num = range(5, 10)
print(list(num))


# range(start,stop,step)：按照指定的step，构造从start到stop的序列
num = range(5, 10, 2)
print(list(num))
