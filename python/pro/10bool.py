# 布尔运算符：and or not
a, b = True, False
print(a and b)
print(a or b)
print(not a)
print(not b)


# in 和 not in
name = 'cnplaman'
print('cn' in name)
print('w' in name)
print('w' not in name)
# 判断元素是否在列表list中
li = [45, 'gl', True]
print(45 in li)


# 利用bool()求python对象的布尔属性
# 以下空对象都是假；
print(bool(False))
print(bool(0))
print(bool(0.0))
print(bool(''))
print(bool(""))
# 空串和有空格的串不一样
print(bool(" "))
# 空数组
print(bool([]))
# 空列表
print(bool(list()))
# 空元组
print(bool(()))
# 空字典
print(bool({}))
# 空字典
print(bool(dict()))
# 空集合
print(bool(set()))
