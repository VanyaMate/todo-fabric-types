"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isDomainNotificationBoardUserActivityUpdate = void 0;
var types_kit_1 = require("@vanyamate/types-kit");
var DomainBoardUserActivity_1 = require("../../../board/user/DomainBoardUserActivity");
var isDomainNotificationBoardUserActivityUpdate = function (data) {
    return ((0, types_kit_1.isObject)(data) &&
        (0, types_kit_1.isString)(data['id']) &&
        (0, DomainBoardUserActivity_1.isDomainBoardUserActivity)(data['activity']));
};
exports.isDomainNotificationBoardUserActivityUpdate = isDomainNotificationBoardUserActivityUpdate;
