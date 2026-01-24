## Web Cookies
> **Cookies are data** that a web-server sends to a browser.

- Why use cookies?

    — Since **HTTP is a stateless protocol** (It does not remember past connections), cookies become very handy because they can store data such as a session ID or a JWT, about a previous/current connection.

    — This allows the web-server “remember” important information from a user’s previous/current access.

- Where the data is stored?

    — After the **web-server send a cookie through an HTTP request header**, the **browser** usually **stores the cookie value in it’s local database** on the client device.

    — When the client access the same site again, the browser attaches it’s cookies on the request automatically.

- How to use cookies?

    — **Cookies are created in the web-server**, and there is many ways of using them. If you’re programming in a **JavaScript and NodeJS environment**, you might want to use the **cookie-parser module** but the *“original” way* of doing so is by the **document property of the BOM interface**.

### First-Party vs. Third-Party cookies
- **First-Party**: Cookies created in the site’s server you’re accessing.
- **Third-Party**: Cookies created in a different server of the site you’re accessing. Ex.: An ad service that a site uses.

### Authentication cookies
Always remember to use **Auth cookies only with HTTPS**.