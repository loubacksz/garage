TML Form - a group of one or more fields/widgets on a web page that can be used to collect information from users for submission to a server.
        is defined in HTML as a collection of elements inside <form>…</form> tags, containing at least one 'input' element of type="submit"
        The field's 'type' attribute defines what sort of widget will be displayed
        The form attributes define the HTTP method used to send the data and the destination of the data on the server (action)
        Often form handling code is implemented using a GET route for the initial display of the form and a POST route to the same path for handling validation and processing of form data

Form Validation and Sanitization
        Validation checks that entered values are appropriate for each field (are in the right range, format, etc.) and that values have been supplied for all required fields.
        Sanitization removes/replaces characters in the data that might potentially be used to send malicious content to the server.
        validation and sanitization chains are middleware that should be passed to the Express route handler (we do this indirectly, via the controller)

cross-site forgery request attacks
cross-site scripting attacks