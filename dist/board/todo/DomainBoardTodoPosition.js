"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isDomainBoardTodoPosition = void 0;
var types_kit_1 = require("@vanyamate/types-kit");
var isDomainBoardTodoPosition = function (data) {
    return ((0, types_kit_1.isObject)(data) &&
        (0, types_kit_1.isNumber)(data['top']) &&
        (0, types_kit_1.isNumber)(data['left']) &&
        (0, types_kit_1.isNumber)(data['rotation']));
};
exports.isDomainBoardTodoPosition = isDomainBoardTodoPosition;
