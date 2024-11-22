"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isDomainBoardTodo = void 0;
var types_kit_1 = require("@vanyamate/types-kit");
var DomainTodo_1 = require("../../todo/DomainTodo");
var DomainBoardTodoPosition_1 = require("./DomainBoardTodoPosition");
var DomainBoardTodoSize_1 = require("./DomainBoardTodoSize");
var isDomainBoardTodo = function (data) {
    return ((0, types_kit_1.isObject)(data) &&
        (0, DomainTodo_1.isDomainTodo)(data['todo']) &&
        (0, DomainBoardTodoPosition_1.isDomainBoardTodoPosition)(data['position']) &&
        (0, DomainBoardTodoSize_1.isDomainBoardTodoSize)(data['size']));
};
exports.isDomainBoardTodo = isDomainBoardTodo;
