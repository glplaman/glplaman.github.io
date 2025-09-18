#include <stdio.h>
#include <stdlib.h>

typedef struct Node
{
    char data;
    int w;
    struct Node *parent;
    struct Node *leftChild;
    struct Node *rightChild;
} Tree;

Tree *createNode(char data)
{
    Tree *node = (Tree *)malloc(sizeof(Tree));
    node->data = data;
    node->leftChild = NULL;
    node->rightChild = NULL;
    return node;
}
void insertNode(Tree *tree, Tree *l, Tree *r)
{
    tree->leftChild = l;
    tree->rightChild = r;
}
void preOrder(Tree *tree)
{
    if (tree)
    {
        printf("%c", tree->data);
        preOrder(tree->leftChild);
        preOrder(tree->rightChild);
    }
}
void inOrder(Tree *tree)
{
    if (tree)
    {
        inOrder(tree->leftChild);
        printf("%c", tree->data);
        inOrder(tree->rightChild);
    }
}
void postOrder(Tree *tree)
{
    if (tree)
    {
        postOrder(tree->leftChild);
        postOrder(tree->rightChild);
        printf("%c", tree->data);
    }
}
void preOrderStack(Tree *tree)
{
    if (tree)
    {
        Tree *nodes[20];
        int top = -1;
        Tree *p = tree;
        while (top != -1 || p)
        {
            while (p)
            {
                printf("%c", p->data);
                top++;
                nodes[top] = p;
                p = p->leftChild;
            }
            if (top != -1)
            {
                p = nodes[top];
                top--;
                p = p->rightChild;
            }
        }
    }
}
void inOrderStack(Tree *tree)
{
    if (tree)
    {
        Tree *nodes[20];
        int top = -1;
        Tree *p = tree;
        while (top != -1 || p)
        {
            while (p)
            {
                top++;
                nodes[top] = p;
                p = p->leftChild;
            }
            if (top != -1)
            {
                p = nodes[top];
                top--;
                printf("%c", p->data);
                p = p->rightChild;
            }
        }
    }
}
void postOrderStack(Tree *tree)
{
    if (tree)
    {
        Tree *nodes[20];
        int top = -1;
        Tree *p = tree;
        Tree *visited = NULL;
        while (p)
        {
            nodes[++top] = p;
            p = p->leftChild;
        }
        while (top != -1)
        {
            p = nodes[top--];
            if (p->rightChild == NULL || p->rightChild == visited)
            {
                printf("%c", p->data);
                visited = p;
            }
            else
            {
                nodes[++top] = p;
                p = p->rightChild;
                while (p)
                {
                    nodes[++top] = p;
                    p = p->leftChild;
                }
            }
        }
    }
}

int main(void)
{
    Tree *A = createNode('A');
    Tree *B = createNode('B');
    Tree *C = createNode('C');
    Tree *D = createNode('D');
    Tree *E = createNode('E');
    Tree *F = createNode('F');
    Tree *G = createNode('G');
    insertNode(A, B, C);
    insertNode(B, D, NULL);
    insertNode(C, E, F);
    insertNode(D, NULL, G);
    preOrder(A);
    printf("\n");
    preOrderStack(A);
    printf("\n");
    inOrder(A);
    printf("\n");
    inOrderStack(A);
    printf("\n");
    postOrder(A);
    printf("\n");
    postOrderStack(A);
    printf("\n");
    return 0;
}