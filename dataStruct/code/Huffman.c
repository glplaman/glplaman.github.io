#include "Huffman.h"

void main(void)
{
    int i;
    int n = 7;
    // int w[] = {2, 4, 5, 3};
    int w[] = {9, 11, 5, 7, 8, 2, 3};
    HTree htree[2 * n - 1];
    char *hcode[n];

    createTree(htree, w, n);
    display(htree, 2 * n - 1);
    encode(htree, hcode, n);
    displayCode(hcode, w, n);
}
