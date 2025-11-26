express - framework to build APIs

nvm - node version manager

web APIs - live inside web-servers - because APIs need web-servers

web-servers - handle  HTTP requests - APIs use HTTP protocol

do I transform a computer into a web-server writing some piece of code? r: yes, with some pre-requisites
- how to do it with express?

express middleware - função que executa ciclo de vida das requisições e respostar HTTP

Middleware functions are functions that have access to the request object (req), the response object (res), and the next function in the application’s request-response cycle
They can perform the following tasks:
- Execute any code.
- Make changes to the request and the response objects.
- End the request-response cycle.
- Call the next middleware in the stack.

middleware - a function that will run between the time the - server gets the request - and sends out a response -> when the server gets the request?

middleware must call next() if it does not end the request-response cycle -> or the req might be left hanging

request doesn't reach middleware loaded after route handlers - they terminate the request-response cycle

the order of middleware loading matters - functions loaded first, are executed first

what is routing/routes - HTTP M. + URI + H.F.
- determine how an app responds a request

when we create an API, we also create a web server?

do we have to create a web-server to use an API?

