"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isDomainNotificationTodoUpdate = void 0;
var types_kit_1 = require("@vanyamate/types-kit");
var DomainTodoUpdateData_1 = require("../../todo/DomainTodoUpdateData");
var isDomainNotificationTodoUpdate = function (data) {
    return ((0, types_kit_1.isObject)(data) &&
        (0, types_kit_1.isString)(data['id']) &&
        (0, DomainTodoUpdateData_1.isDomainTodoUpdateData)(data['data']));
};
exports.isDomainNotificationTodoUpdate = isDomainNotificationTodoUpdate;
