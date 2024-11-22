"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isDomainBoardUser = void 0;
var types_kit_1 = require("@vanyamate/types-kit");
var DomainUser_1 = require("../../user/DomainUser");
var DomainBoardUserPosition_1 = require("./DomainBoardUserPosition");
var DomainBoardUserActivity_1 = require("./DomainBoardUserActivity");
var isDomainBoardUser = function (data) {
    return ((0, types_kit_1.isObject)(data) &&
        (0, DomainUser_1.isDomainUser)(data['user']) &&
        (0, DomainBoardUserPosition_1.isDomainBoardUserPosition)(data['position']) &&
        (0, DomainBoardUserActivity_1.isDomainBoardUserActivity)(data['activity']));
};
exports.isDomainBoardUser = isDomainBoardUser;
