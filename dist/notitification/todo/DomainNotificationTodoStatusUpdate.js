"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isDomainNotificationTodoStatusUpdate = void 0;
var types_kit_1 = require("@vanyamate/types-kit");
var DomainTodoStatus_1 = require("../../todo/DomainTodoStatus");
var isDomainNotificationTodoStatusUpdate = function (data) {
    return ((0, types_kit_1.isObject)(data) &&
        (0, types_kit_1.isString)(data['id']) &&
        (0, DomainTodoStatus_1.isDomainTodoStatus)(data['status']));
};
exports.isDomainNotificationTodoStatusUpdate = isDomainNotificationTodoStatusUpdate;
