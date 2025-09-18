#include <stdio.h>
#include <string.h>
#include <stdlib.h>

#define INIT -1
typedef struct Node
{
    int w;
    int left;
    int right;
    int parent;
} Node, HTree;

void sel(HTree htree[], int curInd, int *min1, int *min2)
{
    int i;
    *min1 = *min2 = INIT;
    for (i = 0; i < curInd; i++)
    {
        // ignore those nodes with parents
        if (htree[i].parent != INIT)
        {
            continue;
        }
        // init min1 and min2
        if (*min1 == INIT)
        {
            *min1 = *min2 = i;
        }
        else
        {
            if (htree[i].w <= htree[*min1].w)
            {
                *min2 = *min1;
                *min1 = i;
            }
            else if (htree[i].w < htree[*min2].w)
            {
                *min2 = i;
            }
            else if (htree[i].w > htree[*min2].w)
            {
                if (*min1 == *min2)
                {
                    *min2 = i;
                }
            }
        }
    }
}

void display(HTree htree[], int n)
{
    int i;
    for (i = 0; i < n; i++)
    {
        printf("i=%d\tw=%d\tparent=%d\tleft=%d\tright=%d\t\n", i, htree[i].w, htree[i].parent, htree[i].left, htree[i].right);
    }
}

void createTree(HTree htree[], int w[], int n)
{
    int i;
    for (i = 0; i < 2 * n - 1; i++)
    {
        htree[i].parent = INIT;
        htree[i].left = INIT;
        htree[i].right = INIT;
    }
    for (i = 0; i < n; i++)
    {
        htree[i].w = w[i];
    }
    // create
    for (i = n; i < 2 * n - 1; i++)
    {
        int min1, min2;
        sel(htree, i, &min1, &min2);
        htree[i].w = htree[min1].w + htree[min2].w;
        htree[i].left = min1;
        htree[i].right = min2;
        htree[min1].parent = htree[min2].parent = i;
    }
}

void encode(HTree htree[], char *hcode[], int n)
{
    int i, start, cur, p;
    // temp array
    char temp[n];
    temp[n - 1] = '\0';

    for (i = 0; i < n; i++)
    {
        start = n - 1;
        cur = i;
        p = htree[i].parent;
        while (p != INIT)
        {
            start--;
            if (htree[p].left == cur)
            {
                temp[start] = '0';
            }
            else
            {
                temp[start] = '1';
            }
            cur = p;
            p = htree[p].parent;
        }
        // copy the code to hc[i] with size n-start
        hcode[i] = (char *)malloc(sizeof(char) * (n - start));
        strcpy(hcode[i], &temp[start]);
        printf("inside: i=%d\thcode[%d]=%s\n", i, i, hcode[i]);
    }
}

void displayCode(char *hcode[], int w[], int n)
{
    int i;
    for (i = 0; i < n; i++)
    {
        printf("i=%d\tw[%d]=%d\thcode=%s\n", i, i, w[i], hcode[i]);
    }
}
