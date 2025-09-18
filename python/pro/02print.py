# 基本输出：默认是换行输出
print(520)
print('520')
print("520")
print(3+2)
# 指定输出结束end为\t
print('hi,there,', end='\t')


# 输出到文件：应该指定file属性，否则输出为空
# 默认在当前文件夹下，可以显式的指定文件位置
fp = open('e:/Python/demo.txt', 'a+')
# print("hi,there.", fp)
print('hi, there...', file=fp)
fp.close()
print('i', 'o', "u")


# 转义输出
# \n：换行
print('hi\nthere.')
# \t：移动到下一个制表位
print('hi\tthere.')
# \b：退格或删除前一个字符
print('hi,123\bhi,123')
# \r：回车，前面的内容被覆盖
print('hi\rthere')
# \\ \' \"
print('\\ \' \"')
# 配对使用' "
print("he said:'hi.'")
print('he said:"hi."')
# 使用r或R指定为元字符而不转义
print(r'hi\nthere.')
print(R'hi\nthere.')
print(r"http:\\www.cnplaman.xyz")
# 最后一个字符不能是\
# print(r"http:\\www.cnplaman.xyz\")
