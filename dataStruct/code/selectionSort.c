#include <stdio.h>

void dis(int arr[], int len);
void selectionSort(int arr[], int len);
int main()
{
    int arr[] = {1, 23, 4, 69, 25, 9};
    dis(arr, 6);
    selectionSort(arr, 6);
    dis(arr, 6);
    return 0;
}

void selectionSort(int arr[], int len)
{
    int i, j, min;
    for (i = 0; i < len - 1; i++)
    {
        int minInd = i;
        for (j = i + 1; j < len; j++)
        {
            if (arr[j] < arr[minInd])
            {
                minInd = j;
            }
        }
        // swap
        min = arr[minInd];
        arr[minInd] = arr[i];
        arr[i] = min;
    }
}

void dis(int arr[], int len)
{
    int i;
    for (i = 0; i < len; i++)
    {
        printf("%d\t", arr[i]);
    }
    printf("\n");
}