"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isDomainUserCreateData = void 0;
var types_kit_1 = require("@vanyamate/types-kit");
var isDomainUserCreateData = function (data) {
    return ((0, types_kit_1.isObject)(data) &&
        (0, types_kit_1.isString)(data['name']));
};
exports.isDomainUserCreateData = isDomainUserCreateData;
