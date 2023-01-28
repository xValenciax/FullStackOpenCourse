```mermaid
    sequenceDiagram
        participant browser
        participant server

        browser->>server: POST https://studies.cs.helsinki.fi/exampleapp/new_note
        Note right of browser: browser sends the user input to the server in a post request
        activate server
        server->>browser: Redirect to https://studies.cs.helsinki.fi/exampleapp/notes
        deactivate server

        Note right of browser: this causes the browser to reload the notes page

        browser->>browser: Reload Notes page

        browser->>server: GET https://studies.cs.helsinki.fi/exampleapp/notes
        activate server
        server->>browser: HTML Document
        deactivate server

        Note right of browser: browser reloading causes 3 more get requests to happen

        browser->>server: GET https://studies.cs.helsinki.fi/exampleapp/main.css
        activate server
        server->>browser: The CSS File(main.css)
        deactivate server

        browser->>server: GET https://studies.cs.helsinki.fi/exampleapp/main.js
        activate server
        server->>browser: The Javascript File(main.js)
        deactivate server

        Note right of browser: browser executes the js code to fetch the data in a json file

        browser->>server: GET https://studies.cs.helsinki.fi/exampleapp/data.json
        activate server
        server->>browser: The Json File(data.json)
        deactivate server

        Note right of browser: The browser executes the callback function that renders the notes
```