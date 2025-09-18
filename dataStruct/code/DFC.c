#include "graph.c"

int visited[MAXV] = {0};
void DFS(AdjGraph *G, int v)
{
    ArcNode *p;
    //置已访问标记,输出被访问顶点的编号
    visited[v] = 1;
    printf("%d  ", v);
    // p指向顶点v的第一条弧的弧头结点
    p = G->adjlist[v].firstarc;
    while (p != NULL)
    {
        //若p->adjvex顶点未访问,递归访问它
        if (visited[p->adjvex] == 0)
            DFS(G, p->adjvex);
        // p指向顶点v的下一条弧的弧头结点
        p = p->nextarc;
    }
}

int main()
{
    AdjGraph *G;
    int A[MAXV][MAXV] = {{0, 1, 0, 1, 1}, {1, 0, 1, 1, 0}, {0, 1, 0, 1, 1}, {1, 1, 1, 0, 1}, {1, 0, 1, 1, 0}};
    int n = 5, e = 8;
    G = CreateAdj(G, A, n, e);
    printf("Adjacent List:\n");
    DispAdj(G);
    printf("DFS:");
    DFS(G, 2);
    printf("\n");
    DestroyAdj(G);
    return 0;
}