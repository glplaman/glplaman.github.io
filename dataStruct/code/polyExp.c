#include <stdio.h>
#include <stdlib.h>

typedef struct Node
{
    int coef;
    int exp;
    struct Node *next;
} Node;

typedef struct
{
    struct Node *head;
} PolyExp;

void create(PolyExp *pe)
{
    pe->head = (Node *)malloc(sizeof(Node));
    pe->head->coef = -1;
    pe->head->exp = -1;
    pe->head->next = NULL;
    Node *pn, *pre, *p;
    while (1)
    {
        pn = (Node *)malloc(sizeof(Node));
        printf("conf:\n");
        scanf("%d", &pn->coef);
        printf("exp:\n");
        scanf("%d", &pn->exp);
        if (pn->exp < 0)
        {
            break;
        }
        pre = pe->head;
        p = pre->next;
        // 已有数据大于新数据，后移
        while (p && p->exp > pn->exp)
        {
            pre = p;
            p = p->next;
        }
        pn->next = p;
        pre->next = pn;
    }
}
// 功能性实现
void display0(PolyExp *pe)
{
    Node *pn;
    pn = pe->head->next;
    printf("pe= ");
    while (pn)
    {
        printf("%dx^%d ", pn->coef, pn->exp);
        pn = pn->next;
    }
    printf("\n");
}
// 基本改善性实现
void display1(PolyExp *pe)
{
    Node *pn;
    pn = pe->head->next;
    printf("pe= ");
    while (pn)
    {
        printf("%+dx^%d ", pn->coef, pn->exp);
        pn = pn->next;
    }
    printf("\n");
}
// 改善性实现
void display2(PolyExp *pe)
{
    Node *pn;
    pn = pe->head->next;
    printf("pe= ");
    while (pn)
    {
        switch (pn->exp)
        {
        case 1:
            switch (pn->coef)
            {
            case 1:
                printf("+x ");
                break;
            case -1:
                printf("-x ");
                break;
            default:
                printf("%+dx ", pn->coef);
                break;
            }
            break;
        case 0:
            switch (pn->coef)
            {
            case 1:
                printf("1 ");
                break;
            case -1:
                printf("-1 ");
                break;
            default:
                printf("%+d ", pn->coef);
                break;
            }
            break;
        default:
            printf("%+dx^%d ", pn->coef, pn->exp);
            break;
        }
        pn = pn->next;
    }
    printf("\n");
}

void add(PolyExp *pe0, PolyExp *pe1)
{
    Node *pre0 = pe0->head;
    Node *p0 = pe0->head->next;
    Node *pre1 = pe1->head;
    Node *p1 = pe1->head->next;
    Node *tmp;
    while (p0 && p1)
    {
        while (p1)
        {
            if (p1->exp > p0->exp)
            {
                pre1->next = p1->next;
                // 移动p1的节点到p0里
                p1->next = p0;
                pre0->next = p1;
                p1 = pre1->next;
                // 因为p0加入了一个节点，所以要更新p0的指针域：p0不用动，pre0前移一个节点
                pre0 = pre0->next;
            }
            else if (p1->exp == p0->exp)
            {
                p0->coef = p0->coef + p1->coef;
                pre1->next = p1->next;
                tmp = p1;
                free(tmp);
                p1 = pre1->next;
            }
            break;
        }
        pre0 = p0;
        p0 = p0->next;
    }
}

int main()
{
    PolyExp *pe0, *pe1;
    pe0 = (PolyExp *)malloc(sizeof(PolyExp));
    pe1 = (PolyExp *)malloc(sizeof(PolyExp));
    create(pe0);
    // display0(pe0);
    display1(pe0);
    display2(pe0);
    create(pe1);
    // display0(pe1);
    display1(pe1);
    display2(pe1);
    add(pe0, pe1);
    // display0(pe0);
    display1(pe0);
    display2(pe0);
    return 0;
}