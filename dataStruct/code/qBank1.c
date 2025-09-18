#include <stdio.h>
#include <stdlib.h>
#include <string.h>
typedef struct Node
{
    int data;
    struct Node *next;
} Node;

typedef struct
{
    Node *rear;
    Node *front;
    int len;
    int size;
} Queue;

void enQueue(Queue *q, int data)
{
    if (q->len == q->size)
    {
        printf("%d rejected\n", data);
        return;
    }
    Node *node = (Node *)malloc(sizeof(Node));
    node->data = data;
    node->next = NULL;
    if (q->len)
    {
        q->rear->next = node;
        q->rear = node;
    }
    else
    {
        q->rear = node;
        q->front = node;
    }
    q->len++;
    printf("%d joined, total %d\n", data, q->len);
    return;
}

void deQueue(Queue *q)
{
    if (!q->len)
    {
        printf("Empty, No one\n");
        return;
    }
    int res = q->front->data;
    q->front = q->front->next;
    q->len--;
    printf("%d called, Total %d\n", res, q->len);
}

int main(void)
{
    int id;
    char keywords[10];
    Queue *q = (Queue *)malloc(sizeof(Queue));
    q->front = NULL;
    q->rear = NULL;
    q->len = 0;
    printf("Queue size:");
    scanf("%d", &q->size);
    while (1)
    {
        scanf("%s", &keywords);
        if (!strcmp("In", keywords) || !strcmp("in", keywords))
        {
            scanf("%d", &id);
            enQueue(q, id);
        }
        if (!strcmp("Calling", keywords) || !strcmp("calling", keywords))
        {
            deQueue(q);
        }
        if (!strcmp("#", keywords))
        {
            free(q);
            return 0;
        }
    }
}