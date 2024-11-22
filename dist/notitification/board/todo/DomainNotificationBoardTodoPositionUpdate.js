"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isDomainNotificationBoardTodoPositionUpdate = void 0;
var types_kit_1 = require("@vanyamate/types-kit");
var DomainBoardTodoPosition_1 = require("../../../board/todo/DomainBoardTodoPosition");
var isDomainNotificationBoardTodoPositionUpdate = function (data) {
    return ((0, types_kit_1.isObject)(data) &&
        (0, types_kit_1.isString)(data['id']) &&
        (0, DomainBoardTodoPosition_1.isDomainBoardTodoPosition)(data['position']));
};
exports.isDomainNotificationBoardTodoPositionUpdate = isDomainNotificationBoardTodoPositionUpdate;
