# identifier标识符
# 字母或_开头
# 不要使用乱七八糟的名字

# 变量：标识符[id：唯一]、类型[type]、值
name = 'cnplaman'
print(id(name))
print(type(name))
print(name)
# 变量可以多次赋值；每次赋值都指向不同的存储空间，所以id会发送变化
# id和存储单元没有关系
name = 'glpla'
print(id(name))
print(type(name))
print(name)


# int
print(type(10))
# 整形的进制表示；默认是十进制
print(10)
# 0b：二进制
print(0b10)
# 0o：八进制
print(0o10)
# 0x：十六进制
print(0x10)


# float
print(type(10.0))
# float计算时，应特别小心：以下表达式并不等于3.3
n1 = 1.1
n2 = 2.2
print(n1+n2)


# bool：true为1，false为0；bool:只有True和False
print(type(True))
print(type(False))
print(True+1)
print(False+1)


# str：可以使用单引号、双引号、三引号[可以换行]
# 注意str是关键字，定义变量时不要使用
print(type('10.0'))
str1 = 'hi,there'
print(str1, type(str1))
str1 = "hi,there"
print(str1, type(str1))
str1 = '''hi,
there'''
print(str1, type(str1))
str1 = """hi,
there"""
print(str1, type(str1))


# 类型转换：int() str() float()
# 作用：拼接字符串、计算；
age = 12
name = 'cnplaman'
print(str(age)+name+'hi')
# float转int只截取整数部分，小数部分被放弃
print(int(10.9))
# 小数串的str不能转int
# print(int('77.7'))
# 整数串可以转int
print(int('77'))
# bool可以转int
print(int(True))
# float通过追加0，将整数或整数串变为float
