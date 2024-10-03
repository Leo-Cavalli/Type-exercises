"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var axios_1 = require("axios");
var url = 'https://jsonplaceholder.typicode.com/todos/40';
;
axios_1.default.get(url).then(function (Response) {
    var todo = Response.data;
    var ID = todo.id;
    var title = todo.title;
    var completed = todo.completed;
    console.log("\n        The todo with ID: ".concat(ID, "\n        Has a title of: ").concat(title, "\n        Is it finished? ").concat(completed, "\n        "));
});
