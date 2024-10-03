"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var axios_1 = require("axios");
var url = 'https://jsonplaceholder.typicode.com/todos/40';
axios_1.default.get(url).then(function (Response) {
    console.log(Response.data);
});
