# break：退出循环
# 输入密码，三次不成功退出
for i in range(3):
    num = input('your passwd:')
    if num == '8888':
        print('ok')
        break
    else:
        print('fail')
