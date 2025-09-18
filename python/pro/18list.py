# list：列表，相当于数组；不必是同类型数据；有序；可以重复；动态分配和回收存储空间，大胆使用即可

# 方法1：使用[]创建：推荐
from operator import index

li = ['gl', 45, True]
# 使用列表的索引访问/修改元素
print(li)
print(id(li))
print(type(li))
print(li[0])
print(id(li[0]))
print(li[1])
print(id(li[1]))
print(li[2])
print(id(li[2]))

# 方法2：使用list()创建
li = list(['gl', 45, True, 'gl'])
print(li)

# 方法3：列表生成式
li = [i for i in range(1, 10)]
print(li)
li = [2*i for i in range(1, 10)]
print(li)
li = [i*i for i in range(1, 10)]
print(li)

# 空列表
li = []
print(li)
li = list()
print(li)

# index()：获取元素的索引，如果有重复元素，只返回第一个；也可以指定索引范围查询
# 系统会自动导入index库
li = ['gl', 45, True, 'gl']
print(li.index('gl'))
print(li.index('gl', 1))  # 从1开始到结束
print(li.index('gl', 1, 6))  # 从1到6，不包括6


# 获取多个元素list[start:stop:step]
# step默认是1
# 切出来的是原来的一个拷贝，是俩个不同的对象
# stop溢出不会告警
# 可以略去某个参数，但是要保留:
print(li[1:3])
print(li[1:5:2])
print(li[:4:3])
print(li[1::2])
print(li[::2])


# 利用in或not in判断元素是否在列表中
print('gl' in li)


# 利用for-in遍历列表
print('old-------------')
print(li)


# append()：在列表末尾增加一个元素
# 思考：如果判断操作后，是创建了新列表还是在原来列表上进行？
# 提示：利用id()
print('new-------------')
print(id(li))
li.append('pla')
print(li)
print(id(li))


# extend()：拓展列表，在列表末尾添加一个列表/多个元素；多个元素以列表的形式提供
# 如果使用append，则被添加的列表会被当做是一个元素
li.extend([12, 34, 56])
print(li)


# insert(index,el)：在index位置前插入元素el，即：在当前位置插入元素
print('insert---------------------')
li.insert(0, 'zh')
print(li)


# 在任意位置添加多个元素


# remove(el)：删除碰到的第一个指定元素；可多次执行以删除重复的元素
print('remove-------------------')
li.remove(45)
print(li)


# pop(index)：删除指定位置的元素，并返回该元素
# 不指定参数时，删除列表最后一个元素
print('pop-------------------')
res = li.pop()
print(res)

# 删除指定位置元素并返回该元素
res = li.pop(2)
print(res)


# 修改元素
# 利用索引
print('modify1-----------------')
li[0] = 23
print(li)

# 利用切片修改列表部分元素
# 123三个元素被替换为11、22、33
print('modify2-----------------')
li[1:4:] = [11, 22, 33]
print(li)


# clear()：清空列表
li.clear()
print(id(li))

# del list：删除列表
del li
# print(id(li))  # li not defined


# sort()：排序；
# 元素必须是同类型；
# 默认是升序，指定reverse属性为true可以降序；
# 排序后仍然是原来的列表，只是各位置元素发生了调整

# 数字型按照大小
print('sort1-----------------')
li = [12, 5, 34, 27, 89]
li.sort()
print(li)

# sort()：排序；元素必须是同类型；
# 字母型按照字母表顺序，逐位比较
print('sort2-----------------')
li = ['a', 'cc', 'cb', 'b']
li.sort()
print(li)

# 反向排序
print('sort3-----------------')
li = [12, 5, 34, 27, 89]
li.sort(reverse=True)
print(li)


# 使用内置函数sorted()排序：会创建一个新的列表
print('sort4:sorted-----------------')
li = [12, 5, 34, 27, 89]
li_new = sorted(li)
print(li)
print(li_new)
