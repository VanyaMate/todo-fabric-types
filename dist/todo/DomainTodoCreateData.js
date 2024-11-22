"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isDomainTodoCreateData = void 0;
var types_kit_1 = require("@vanyamate/types-kit");
var DomainTodoStatus_1 = require("./DomainTodoStatus");
var isDomainTodoCreateData = function (data) {
    return ((0, types_kit_1.isObject)(data) &&
        (0, types_kit_1.isString)(data['title']) &&
        (0, types_kit_1.isString)(data['description']) &&
        (0, types_kit_1.isNumber)(data['dueTime']) &&
        (0, DomainTodoStatus_1.isDomainTodoStatus)(data['status']));
};
exports.isDomainTodoCreateData = isDomainTodoCreateData;
