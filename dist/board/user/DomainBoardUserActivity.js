"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isDomainBoardUserActivity = void 0;
var types_kit_1 = require("@vanyamate/types-kit");
var DomainBoardUserStatus_1 = require("./DomainBoardUserStatus");
var DomainBoardUserTarget_1 = require("./DomainBoardUserTarget");
var isDomainBoardUserActivity = function (data) {
    return ((0, types_kit_1.isObject)(data) &&
        (0, DomainBoardUserStatus_1.idDomainBoardUserStatus)(data['status']) &&
        (0, DomainBoardUserTarget_1.isDomainBoardUserTarget)(data['target']));
};
exports.isDomainBoardUserActivity = isDomainBoardUserActivity;
