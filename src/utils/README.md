**UTILS FOLDER RULES**

In order for a file to qualifty to be inside the utils folder, it must meet either of these requirements:

1. Contain only pure methods.
2. Contain utility functions such as text formatters, input sanitizer, and reusable static methods (ex: convert fahrenheit to celsius).

Examples of what does **NOT** qualify as a utils folder file

1. Contains method that calls an API
2. Contains method that mutates outside variables
3. Impure methods
4. Math.random() Method or any Time Method

**RESOURCES**
Before contributing to this folder, please read and follow the guidelines in these articles:

- https://medium.com/@jamesjefferyuk/javascript-what-are-pure-functions-4d4d5392d49c
- https://www.theodinproject.com/lessons/node-path-javascript-more-testing
