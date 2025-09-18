#include <stdio.h>
#include <stdlib.h>
#include <string.h>

int main(void)
{
    int *p = NULL;
    p = malloc(sizeof(int));
    *p = 10;
    printf("%d\n", *p);
}