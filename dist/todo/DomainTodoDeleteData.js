"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isDomainTodoDeleteData = void 0;
var types_kit_1 = require("@vanyamate/types-kit");
var isDomainTodoDeleteData = function (data) {
    return ((0, types_kit_1.isObject)(data) &&
        (0, types_kit_1.isString)(data['id']));
};
exports.isDomainTodoDeleteData = isDomainTodoDeleteData;
