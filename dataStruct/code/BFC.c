#include "graph.c"
#define MaxSize 100
//--广度优先遍历中使用队列的基本运算算法-------------------
typedef int ElemType;
typedef struct
{
    ElemType data[MaxSize];
    int front, rear; //队首和队尾指针
} SqQueue;
SqQueue *InitQueue(SqQueue *q)
{
    q = (SqQueue *)malloc(sizeof(SqQueue));
    q->front = q->rear = 0;
    return q;
}
void DestroyQueue(SqQueue *q)
{
    free(q);
}
int QueueEmpty(SqQueue *q)
{
    if (q->front == q->rear)
        return 1;
    else
        return 0;
}
int enQueue(SqQueue *q, ElemType e)
{
    if ((q->rear + 1) % MaxSize == q->front) //队满上溢出
        return -1;
    q->rear = (q->rear + 1) % MaxSize;
    q->data[q->rear] = e;
    return 0;
}
int deQueue(SqQueue *q, ElemType e)
{
    if (q->front == q->rear) //队空下溢出
        return -1;
    q->front = (q->front + 1) % MaxSize;
    e = q->data[q->front];
    return 0;
}
//---------------------------------------------------------

void BFS(AdjGraph *G, int v)
{
    int w, i;
    ArcNode *p;
    SqQueue *qu;        //定义环形队列指针
    qu = InitQueue(qu); //初始化队列
    int visited[MAXV];  //定义顶点访问标志数组
    for (i = 0; i < G->n; i++)
        visited[i] = 0; //访问标志数组初始化
    printf("%2d", v);   //输出被访问顶点的编号
    visited[v] = 1;     //置已访问标记
    enQueue(qu, v);
    while (!QueueEmpty(qu)) //队不空循环
    {
        deQueue(qu, w);             //出队一个顶点w
        p = G->adjlist[w].firstarc; //指向w的第一个邻接点
        while (p != NULL)           //查找w的所有邻接点
        {
            if (visited[p->adjvex] == 0) //若当前邻接点未被访问
            {
                printf("%2d", p->adjvex); //访问该邻接点
                visited[p->adjvex] = 1;   //置已访问标记
                enQueue(qu, p->adjvex);   //该顶点进队
            }
            p = p->nextarc; //找下一个邻接点
        }
    }
    printf("\n");
}

int main()
{
    AdjGraph *G;
    int A[MAXV][MAXV] = {{0, 1, 0, 1, 1}, {1, 0, 1, 1, 0}, {0, 1, 0, 1, 1}, {1, 1, 1, 0, 1}, {1, 0, 1, 1, 0}};
    int n = 5, e = 8;
    G = CreateAdj(G, A, n, e);
    printf("Adjacent List:\n");
    DispAdj(G);
    printf("BFS:");
    BFS(G, 2);
    printf("\n");
    DestroyAdj(G);
    return 0;
}
