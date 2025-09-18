#include <stdio.h>
#include <stdlib.h>
#include <string.h>

enum options
{
    Exit,
    Add,
    Delete,
    Update,
    Search,
    Print,
    Sort,
    Output,
    LengthOfContact,
    AddByTail
};

//字符串成员变量请使用字符数组，最好不要使用指针，否则你要申请空间；
typedef struct
{
    char name[8];
    int age;
    char gender;
    char cell[12];
    char address[12];
} Student;

typedef struct stuNode
{
    Student student;
    struct stuNode *next;
} Node, Contact;

// AddByHead函数使用到输出函数，所以要先声明该函数；
//如果没有函数使用，就可以不声明；
int Length(Contact *contact);
void Display(Contact *contact);

Contact *Init()
{
    Node *head = (Node *)malloc(sizeof(Node));
    head->next = NULL;
    printf("%s %s\n", __TIME__, __DATE__);
    return head;
}

int Length(Contact *contact)
{
    int len = 0;
    Node *head = contact->next;
    while (head)
    {
        len++;
        head = head->next;
    }
    return len;
}

//头插法
void AddByHead(Contact *contact)
{
    Node *node = (Node *)malloc(sizeof(Node));

    printf("please input the name->");

    // char[]可以直接输入，因为数组名就是地址
    // int和char需要使用取地址符&，输入到地址对应的内存单元
    scanf("%s", node->student.name);
    //清空缓冲区：避免回车、换行、空格等空白字符被后面的数据获取；以下类似
    fflush(stdin);
    printf("please input the age:Number->>>");
    scanf("%d", &(node->student.age));
    fflush(stdin);
    printf("please input your gender. m/M stand for male, f/F stand for female->>>");
    scanf("%c", &(node->student.gender));
    fflush(stdin);
    printf("please input your cellphone number->>>");
    scanf("%s", node->student.cell);
    fflush(stdin);
    printf("please input your address->>>");
    scanf("%s", node->student.address);
    //清空缓冲区，避免残留的内容被当作选项option的输入
    fflush(stdin);

    //头插法
    node->next = contact->next;
    contact->next = node;

    printf("contact item add ok\n");    
    printf("%s %s\n\n", __TIME__, __DATE__);
    return;
}

void Display(Contact *contact)
{
    Node *node = contact->next;
    int i = 0;
    printf("contack list ------------------------------------------------------\n");
    printf("%-3s\t%-8s\t%-3s\t%-3s\t%-15s\t%-30s\n", "Sn", "Name", "Age", "Gender", "Cell", "Address");
    while (node)
    {
        printf("%-3d\t%-8s\t%-3d\t%-3c\t%-15s\t%-30s\n", i + 1, node->student.name, node->student.age, node->student.gender, node->student.cell, node->student.address);
        node = node->next;
        i++;
    }
    printf("contack list ------------------------------------------------------\n\n");
    printf("%s %s\n\n", __TIME__, __DATE__);
}

void DeleteByIndex(Contact *contact)
{
    int ind, i;
    int len = Length(contact);
    printf("item delete index is->>>");
    scanf("%d", &ind);
    fflush(stdin);
    //为什么不用循环直到获取正确的index？？？
    if (ind > len - 1 || ind < 0)
    {
        printf("index overfollow\n\n");
        return;
    }
    Node *p, *q;
    p = contact;
    while (p->next && i < ind)
    {
        p = p->next;
        i++;
    }
    q = p->next;
    p->next = q->next;
    free(q);
    printf("delete ok\n");
    printf("%s %s\n\n", __TIME__, __DATE__);
}
void UpdateByIndex(Contact *contact) { printf("UpdateByIndex\n"); }
void SearchByName(Contact *contact) { printf("SearchByName\n"); }
void SortByAge(Contact *contact) { printf("SortByAge\n"); }
void OutputToFile(Contact *contact) { printf("OutputToFile\n"); }
void InsertByTail(Contact *contact) { printf("InsertByTail\n"); }