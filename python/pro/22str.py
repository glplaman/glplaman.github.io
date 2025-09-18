# str：字符串，基本数据类型；不可变序列[元组tuple]
# 使用单引号、双引号、三引号定义。定义的为一个字符串常量；
# 三种方式定义的是同一个对象，即：驻留机制，仅保留一份；避免重复创建和销毁；使用join()而非+拼接字符串
s0 = 'cnplaman%'
s1 = "cnplaman%"
s2 = '''cnplaman%'''
print(s0, id(s0))
print(s1, id(s1))
print(s2, id(s2))
print(s0 is s1)
print(s0 is s2)
print(s1 is s2)


# 查找子串
# index()：子串第一次出现的位置；不存在则告警
# rindex()：子串最后一次出现的位置；不存在则告警
# find()：子串第一次出现的位置；不存在返回-1
# rfind()：子串最后一次出现的位置；不存在返回-1
s = 'hi,there.'
print(s.index('hi'))
print(s.index('e'))
print(s.rindex('e'))
print(s.find('hi'))
print(s.find('4e'))
print(s.rfind('ee'))


# 大小写转换；转换结果会生成一个新的字符串
# upper()：大写
# lower()：小写
# swapcase()：交换大小写
# capitalize()：只有第一个字符大写，其它小写
# title()：每个单词首字母大写
s = 'hi,there! WLAN.'
print('lower\t\t', s.lower())
print('upper\t\t', s.upper())
print('swapcase\t', s.swapcase())
print('capitalize\t', s.capitalize())
print('title\t\t', s.title())


# 字符串对齐，需要指定一个宽度以便对齐
# center(width[,char])：居中对齐，多余的位置使用指定的字符填充，默认是空格
# ljust(width[,char])：左对齐，多余的位置使用指定的字符填充，默认是空格
# rjust(width[,char])：右对齐，多余的位置使用指定的字符填充，默认是空格
# zfill(width)：使用0填充；z->zero
s = 'hi,there! WLAN.'
print(s.center(20))
print(s.center(20, '-'))
print(s.ljust(20, '*'))
print(s.rjust(20, '#'))
print(s.zfill(20))
# 思考：如果指定宽度比字符串实际宽度小？
# 思考：如果是负数如何zfill()？
print('-1001'.zfill(20))


# 字符串的分割：返回一个字符串列表
# split([Ssep])：按照指定的分隔符sep分割字符串；默认以空格分割字符串
# rsplit([Ssep])：从右边分割
s = 'welcome to China.'
print(s.split())
print(s.split('h'))


# 判断字符串类型
# isalpha()：是否由字母组成
# isnumeric()：是否由数字组成
# isalnum()：是否是字母和数字组成
print('cnplaman'.isalpha())
print('12345'.isnumeric())
print('unit54414'.isalnum())


# 其它操作
# replace(old_str,new_str[,count])：使用新字符串替换旧字符串；count是替换的次数，默认只替换1次
print('hello,world.'.replace('world', 'java'))
print('hello,world.'.replace('l', 'H', 2))

# join()：将列表list或元组tuple中的字符串[不能是其它类型；不会强制类型转换]连接称为一个字符串
# 注意：是连接符的函数，不是字符串的函数
li = ['hi', 'there', 'man', '56']
print(''.join(li))
print('|'.join(li))
tp = ('glpla', '45', 'True')
print(''.join(tp))
print('*'.join(tp))
# 单个字符串的连接
print('*'.join('cnplaman'))


# 字符串的比较：根据字符的原始值ord，逐一比较
# > < == >= <= !=
print('apple' > 'app')
print('apple' > 'banana')
print(ord('a'), ord('b'))
print(chr(97), chr(98))


# 格式化字符串
# 方法1：使用%作为占位符，同C的占位符：%s %d %f；可以指定宽度
name = 'glpla'
age = 46
score = 97.5
print('my name is %s, of age %d with score %f' % (name, age, score))
# 指定浮点数总长度和小数位数
print('my name is %8s, of age %8d with score %6.2f' % (name, age, score))
# 指定小数位数
print('my name is %8s, of age %8d with score %.2f' % (name, age, score))
# 方法2：使用format()：利用数字和变量对应起来
print('my name is {0}, of age {1}'.format(name, age))
# 方法3：使用format-str
print(f'my name is {name}, of age {age}')


# coding decoding：多用于爬网
# GBK一个汉字2个字节；UTF-8一个汉字3个字节
s = '张树彬'
en = s.encode('GBK')
print(en)
de = en.decode('gbk')
print(de)
en = s.encode('UTF-8')
print(en)
de = en.decode('utf-8')
print(de)
