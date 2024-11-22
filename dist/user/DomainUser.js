"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isDomainUser = void 0;
var types_kit_1 = require("@vanyamate/types-kit");
var isDomainUser = function (data) {
    return ((0, types_kit_1.isObject)(data) &&
        (0, types_kit_1.isString)(data['id']) &&
        (0, types_kit_1.isString)(data['name']));
};
exports.isDomainUser = isDomainUser;
