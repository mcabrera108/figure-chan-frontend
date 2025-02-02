# Figure-chan-frontend

Frontend for Figure-Chan Website

**Welcome to Figure-Chan! A portfolio project created for the purpose of improving upon the concepts of figure collecting websites, utilizing modern web development tools and frameworks. Furthermore, this project seeks to enhance the user experience by simplifying a variety of UI design choices that MFC has yet to address in their platform.**

![alt text](https://i.imgur.com/56iCTrO.png)

**To run project**

1. Clone repo onto local machine
2. Navigate to project using terminal
3. Run command npm run dev and open localhost:5173 on browser (Chrome Recommended)

**To run Unit Tests**

1. Clone repo onto local machine
2. Navigate to project using terminal
3. Run command npm run test [insert test component name here] or \* to run all unit tests
4. Tests should be running on terminal

**SERVICES FOLDER RULES**
In order for a file to qualify to be inside the services folder, it must meet these requirements:

1. Contains async component methods that call an API

Examples of what does **NOT** qualify as a services folder file

1. Pure Methods
2. Regular UI Components

**UTILS FOLDER RULES**

In order for a file to qualify to be inside the utils folder, it must meet either of these requirements:

1. Contain only pure methods.
2. Contain utility functions such as text formatters, input sanitizer, and reusable static methods (ex: convert fahrenheit to celsius).

Examples of what does **NOT** qualify as a utils folder file

1. Contains method that calls an API
2. Contains method that mutates outside variables
3. Impure methods
4. Math.random() Method or any Time Method

**RESOURCES**
Before contributing to project, please read and follow the guidelines in these articles:

- https://medium.com/@jamesjefferyuk/javascript-what-are-pure-functions-4d4d5392d49c
- https://www.theodinproject.com/lessons/node-path-javascript-more-testing
