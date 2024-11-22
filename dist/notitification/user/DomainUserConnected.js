"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isDomainUserConnected = void 0;
var types_kit_1 = require("@vanyamate/types-kit");
var DomainUser_1 = require("../../user/DomainUser");
var isDomainUserConnected = function (data) {
    return ((0, types_kit_1.isObject)(data) &&
        (0, DomainUser_1.isDomainUser)(data['user']));
};
exports.isDomainUserConnected = isDomainUserConnected;
