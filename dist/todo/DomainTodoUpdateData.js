"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isDomainTodoUpdateData = void 0;
var types_kit_1 = require("@vanyamate/types-kit");
var DomainTodoStatus_1 = require("./DomainTodoStatus");
var isDomainTodoUpdateData = function (data) {
    return ((0, types_kit_1.isObject)(data) &&
        (0, types_kit_1.isOptional)(data['title'], types_kit_1.isString) &&
        (0, types_kit_1.isOptional)(data['description'], types_kit_1.isString) &&
        (0, types_kit_1.isOptional)(data['dueTime'], types_kit_1.isNumber) &&
        (0, types_kit_1.isOptional)(data['status'], DomainTodoStatus_1.isDomainTodoStatus));
};
exports.isDomainTodoUpdateData = isDomainTodoUpdateData;
