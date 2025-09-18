#include <stdio.h>

char *strcopy(char *dest, const char *src);
int main(void)
{
    char strDest[128];
    char strSrc[] = "helloworld";
    strcopy(strDest, strSrc);
    puts(strDest);
}

char *strcopy(char *dest, const char *src)
{
    while ((*dest++ = *src++) != '\0')
        ;
}