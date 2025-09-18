# 内置数据结构；值对key-value；无序序列；可变序列；以{}表示；相当于JSON；
# 根据key查找value所在的位置

# 创建字典
# 方法1：利用{}；推荐
di = {'name': 'gl', 'age': 46}
print(di)

# 方法2：利用dict()函数
di = dict({'name': 'gl', 'age': 46})
print(di)

di = dict(name='gl', age=46)
print(di)
# key不允许重复，value可以重复；后面定义的会覆盖前面的
print('over-write-------------------')
di = {'name': 'gl', 'age': 46, 'name': 'cn'}
print(di)

# 方法3：字典生成式，根据已有list创建字典
# zip(list_keys,list_values)
item = ['apple', 'banana', 'orange']
price = [6, 3, 2]
friut = zip(item, price)
print(friut)
print(list(friut))

# 或
fruit = {item.upper(): price for item, price in zip(item, price)}
print(fruit)

# 空字典
di = {}
print(di)
di = dict()
print(di)

# 获取元素：利用key获取

# 方法1：[]
print(di['name'])
# print(di['hi'])  # 如果key不存在，则告警
# 方法2：get()；如果key不存在，返回为None
print(di.get('name'))
print(di.get('beij'))

# key是否存在
print('name' in di)
print('age' in di)

# 删除item
print('del item--------------------')
print('before:\t', di)
del di['name']
print('after:\t', di)

# 增加一个或多个元素
print('add-------------------------')
print('before:\t', di)
di['unit'] = 54414
print('after:\t', di)

# clear：清除字典[内容]
di.clear()
print('clear:\t', di)

# 获取字典视图keys()：返回类型dict_keys；可以使用list()转换成列表
di = {'name': 'gl', 'age': 46, 'unit': '54414'}
keys = di.keys()
print(keys, type(keys))
print(list(keys))

# 获取字典视图values()：返回类型dict_values；可以使用list()转换成列表
vals = di.values()
print(vals, type(vals))
print(list(vals))

# 获取字典视图items()：返回类型dict_items；元组结构；可以使用list()转换成列表
items = di.items()
print(items, type(items))
print(list(items))

# 字典元素的遍历：获取的是keys；有了keys就可以获取到value
for item in di:
    print(item, di[item], di.get(item))
