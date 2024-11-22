"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isDomainNotificationTodoCreate = void 0;
var DomainTodo_1 = require("../../todo/DomainTodo");
var isDomainNotificationTodoCreate = function (data) {
    return (0, DomainTodo_1.isDomainTodo)(data);
};
exports.isDomainNotificationTodoCreate = isDomainNotificationTodoCreate;
