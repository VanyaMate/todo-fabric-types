"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isDomainBoardTodoSize = void 0;
var types_kit_1 = require("@vanyamate/types-kit");
var isDomainBoardTodoSize = function (data) {
    return ((0, types_kit_1.isObject)(data) &&
        (0, types_kit_1.isNumber)(data['width']) &&
        (0, types_kit_1.isNumber)(data['height']));
};
exports.isDomainBoardTodoSize = isDomainBoardTodoSize;
