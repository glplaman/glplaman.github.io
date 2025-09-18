#include <stdio.h>
#include <stdlib.h>
#include "contact.h"

void menu(void);

int main(void)
{
    int option, len;
    printf("\nWelcome\n");
    Contact *contact = Init();
    do
    {
        menu();
        printf("Please make a choice->>>");
        scanf("%d", &option);
        switch (option)
        {
        case Add:
            AddByHead(contact);
            break;
        case Delete:
            DeleteByIndex(contact);
            break;
        case Update:
            UpdateByIndex(contact);
            break;
        case Search:
            SearchByName(contact);
            break;
        case Print:
            Display(contact);
            break;
        case Sort:
            SortByAge(contact);
            break;
        case Output:
            OutputToFile(contact);
            break;
        case LengthOfContact:
            len = Length(contact);
            printf("lenght of current contact is %d\n", len);
            printf("%s %s\n\n", __TIME__, __DATE__);
            break;
        case AddByTail:
            OutputToFile(contact);
            break;
        case Exit:
            printf("Bye Bye\n");
            printf("%s %s\n\n", __TIME__, __DATE__);
            exit(0);
            break;
        default:
            printf("Bye Bye\n");
            printf("%s %s\n\n", __TIME__, __DATE__);
            exit(0);
            break;
        }
    } while (1);

    return 0;
}
void menu(void)
{
    printf("**********************************************\n");
    printf("***   1.Insert                2.Delete     ***\n");
    printf("***   3.Update                4.Search     ***\n");
    printf("***   5.Display               6.Sort       ***\n");
    printf("***   7.Output                8.Length     ***\n");
    printf("***   9.InsertByTail          0.Exit       ***\n");
    printf("**********************************************\n");
    printf("<<<<<<<<<<<<<<202012000001������>>>>>>>>>>>>>>\n\n");
}
