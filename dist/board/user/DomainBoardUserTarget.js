"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isDomainBoardUserTarget = void 0;
var types_kit_1 = require("@vanyamate/types-kit");
var DomainBoardUserTargetType_1 = require("./DomainBoardUserTargetType");
var isDomainBoardUserTarget = function (data) {
    return ((0, types_kit_1.isObject)(data) &&
        (0, types_kit_1.isString)(data['id']) &&
        (0, DomainBoardUserTargetType_1.isDomainBoardUserTargetType)(data['type']));
};
exports.isDomainBoardUserTarget = isDomainBoardUserTarget;
