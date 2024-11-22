"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isDomainBoardUserPosition = void 0;
var types_kit_1 = require("@vanyamate/types-kit");
var isDomainBoardUserPosition = function (data) {
    return ((0, types_kit_1.isObject)(data) &&
        (0, types_kit_1.isNumber)(data['top']) &&
        (0, types_kit_1.isNumber)(data['left']));
};
exports.isDomainBoardUserPosition = isDomainBoardUserPosition;
