# 集合set：python内置数据结构；没有重复数据项目
# 特例：集合是没有value的字典

# 创建集合
# 方法1：{}
s = {12, 'glpla', 12, True}
print(s, type(s))

# 方法2：set()
s = set({12, 'glpla', 12, True})
print(s, type(s))
# 借助range()
s = set(range(10))
s = set(range(10))
# 借助字符串
s = set('python')
print(s, type(s))
# 空集合
# s = {}
# print(s, type(s))
s = set()
print(s, type(s))

# 方法3：集合生成式
s = {i for i in range(10)}
print(s, type(s))


s = {'cnplamna', 'male', 46, '54414'}
# 判断元素in 或not in
print(46 in s)
print('46' in s)


# add()：增加一个元素；如果元素已存在，则操作无效
s.add(46)
s.add(18)
print(s)

# update()：增加多个元素；可以使用[]{}()定义的union更新集合set
s.update({1, 2, 3})
print(s)
s.update([11, 22, 33])
print(s)
s.update((111, 222, 333))
print(s)

# remove()：删除一个元素；如果元素不存在，则告警
s.remove(333)
print(s)
# s.remove(333)
# print(s)

# discard()：删除一个元素，如果元素不存在，不作任何处理
s.discard(333)
print(s)

# pop()：删除第一个元素；无参
s.pop()
print(s)
s.pop()
print(s)
s.pop()
print(s)

# clear()：清空集合
s.clear()
print(s)


# 集合关系；不影响原集合
# 相等：元素相同即可；顺序无关
s0 = {10, 20, 30}
s1 = {20, 30, 10}
print(s0 == s1)
# 子集
s2 = {10, 20}
print(s2.issubset(s0))
# 父集/超集
print(s1.issuperset(s2))
# 是否没有交集
s3 = {50, 40}
print(s2.isdisjoint(s0))
print(s0.isdisjoint(s3))
# 交集；也可以使用 &
print('intersection------------------')
print(s0.intersection(s2))
print(s0 & s2)
# 并集；也可以使用 |
print('union------------------')
print(s0.union(s3))
print(s0 | s3)
# 差集；也可以使用-；注意目标集合和源集合；从自身集合中减去相同的元素；
print('difference------------------')
s0 = {10, 20, 30, 50}
s1 = {30, 40, 50}
print('s0', s0)
print('s1', s1)
print('s0-s1', s0.difference(s1))
print('s0-s1', s0-s1)
print('s1-s0', s1.difference(s0))
print('s1-s0', s1-s0)
# 对称差集；也可以使用~；除了俩个集合交集外的元素集合，即：不包含在交集内的元素
print('s1~s0', s1.symmetric_difference(s0))
print('s0~s1', s0.symmetric_difference(s1))
# 显然，自己和自己的对称差集为空
print('s0~s0', s0.symmetric_difference(s0))
