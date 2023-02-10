# ezweb usage
Import ezweb like this
```js
require { ezweb } = require("ezweb")
```
then use this line of code below to create a webserver painlessly.
```js
ezweb("public", 4200)
```
You can change the "public" in the example to anything you want.
The given folder will be the root (/) of the website.
The port "4200" in the example can be changed to any port you want, make sure it is NOT taken by another program.
If the port is 80 then the URL will just be http://localhost instead of http://localhost:PORT!
