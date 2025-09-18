#include <stdio.h>
#include <stdlib.h>
typedef struct node
{
    int data;
    struct node *next;
} Node, List;

int Len(List *list);
Node *Init()
{
    Node *head = (Node *)malloc(sizeof(Node));
    printf("%p\n", head);
    head->next = NULL;
    return head;
}

void Display(List *list)
{
    printf("List->");
    Node *head = list->next;
    while (head)
    {
        printf("%d->", head->data);
        head = head->next;
    }
    printf("NULL\n");
}

void InsertHead(List *list, int data)
{
    Node *p = list;
    Node *node = (Node *)malloc(sizeof(Node));
    node->data = data;
    node->next = p->next;
    p->next = node;
}
void InsertTail(List *list, int data)
{
    Node *p = list;
    while (p->next)
    {
        p = p->next;
    }
    Node *node = (Node *)malloc(sizeof(Node));
    node->data = data;
    node->next = NULL;
    p->next = node;
}
void InsertByIndex(List *list, int ind, int data)
{
    int i = 0;
    List *p = list;
    if (ind < 0 || ind > Len(list) - 1)
    {
        printf("index overfollow\n");
        return;
    }
    while (i < ind)
    {
        p = p->next;
        i++;
    }
    Node *node = (List *)malloc(sizeof(Node));
    node->data = data;
    node->next = p->next;
    p->next = node;
}

int Len(List *list)
{
    int len = 0;
    Node *head = list->next;
    while (head)
    {
        len++;
        head = head->next;
    }
    return len;
}

void Get(List *list, int ind, int *res)
{
    int i = 0;
    int length = Len(list);
    if (ind < 0 || ind > length - 1)
    {
        printf("index overfollow\n");
        return;
    }
    Node *p = list->next;
    while (i < ind)
    {
        p = p->next;
        i++;
    }
    *res = p->data;
}

int IndexOf(List *list, int data)
{
    int i = 0;
    Node *p = list->next;
    while (p && p->data != data)
    {
        p = p->next;
        i++;
    }
    return p ? i : -1;
}

void DeleteByIndex(List *list, int ind, int *res)
{
    int i = 0;
    int length = Len(list);
    Node *p = list;
    Node *q = NULL;
    if (ind < 0 || ind > length - 1)
    {
        printf("index overfollow\n");
        return;
    }
    while (p->next && i < ind)
    {
        printf("%d\t", i);
        p = p->next;
        i++;
    }
    q = p->next;
    *res = q->data;
    p->next = q->next;
    free(q);
}
