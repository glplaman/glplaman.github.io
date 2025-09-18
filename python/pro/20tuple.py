# 元组tuple：使用()表示值对
# 创建元组

# 方法1：()
tp = ('gl', 46, '54414', True)
print(tp, type(tp))
# 甚至省略()，但不推荐
tp = 'gl', 46, '54414', True
print(tp, type(tp))
# 如果只有一个元素，必须使用()和,
tp = ('gl', )
print(tp, type(tp))

# 方法2：tuple()
tp = tuple(('gl', 46, '54414', True))
print(tp, type(tp))

# 空元组
tp = ()
print(tp)
tp = tuple()
print(tp)

# 元组的遍历
tp = ('gl', 46, '54414', True)
for item in tp:
    print(item)
