"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isDomainNotificationBoardTodoSizeUpdate = void 0;
var types_kit_1 = require("@vanyamate/types-kit");
var DomainBoardTodoSize_1 = require("../../../board/todo/DomainBoardTodoSize");
var isDomainNotificationBoardTodoSizeUpdate = function (data) {
    return ((0, types_kit_1.isObject)(data) &&
        (0, types_kit_1.isString)(data['id']) &&
        (0, DomainBoardTodoSize_1.isDomainBoardTodoSize)(data['size']));
};
exports.isDomainNotificationBoardTodoSizeUpdate = isDomainNotificationBoardTodoSizeUpdate;
