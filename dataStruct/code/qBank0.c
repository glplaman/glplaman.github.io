#include <stdio.h>
#include <stdlib.h>
#include <string.h>
#define maxSize 20
typedef struct
{
    int data[maxSize];
    int rear;
    int front;
    int len;
    int size;
} Queue;

void enQueue(Queue *q, int data)
{
    if ((q->rear + 1) % q->size == q->front)
    {
        printf("Full, %d rejected\n", data);
        return;
    }
    q->rear = (q->rear + 1) % q->size;
    q->data[q->rear] = data;
    q->len++;
    printf("%d joined, Total %d\n", data, q->len);
}

void deQueue(Queue *q)
{
    if (q->rear == q->front)
    {
        printf("Empty, No one\n");
        return;
    }
    q->front = (q->front + 1) % q->size;
    q->len--;
    printf("%d called, total %d\n", q->data[q->front], q->len);
}

int main(void)
{
    int size, id;
    char keywords[10];
    Queue *q = (Queue *)malloc(sizeof(Queue));
    q->front = 0;
    q->rear = 0;
    q->len = 0;
    printf("Queue size:");
    scanf("%d", &size);
    q->size = (size + 1);
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