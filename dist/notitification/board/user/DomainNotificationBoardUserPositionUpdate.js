"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isDomainNotificationBoardUserPositionUpdate = void 0;
var types_kit_1 = require("@vanyamate/types-kit");
var DomainBoardUserPosition_1 = require("../../../board/user/DomainBoardUserPosition");
var isDomainNotificationBoardUserPositionUpdate = function (data) {
    return ((0, types_kit_1.isObject)(data) &&
        (0, types_kit_1.isString)(data['id']) &&
        (0, DomainBoardUserPosition_1.isDomainBoardUserPosition)(data['position']));
};
exports.isDomainNotificationBoardUserPositionUpdate = isDomainNotificationBoardUserPositionUpdate;
