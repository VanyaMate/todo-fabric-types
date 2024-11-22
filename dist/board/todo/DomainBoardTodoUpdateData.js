"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isDomainBoardTodoUpdateData = void 0;
var types_kit_1 = require("@vanyamate/types-kit");
var DomainBoardTodoPosition_1 = require("./DomainBoardTodoPosition");
var DomainBoardTodoSize_1 = require("./DomainBoardTodoSize");
var DomainTodoUpdateData_1 = require("../../todo/DomainTodoUpdateData");
var isDomainBoardTodoUpdateData = function (data) {
    return ((0, types_kit_1.isObject)(data) &&
        (0, types_kit_1.isOptional)(data['todo'], DomainTodoUpdateData_1.isDomainTodoUpdateData) &&
        (0, types_kit_1.isOptional)(data['position'], DomainBoardTodoPosition_1.isDomainBoardTodoPosition) &&
        (0, types_kit_1.isOptional)(data['size'], DomainBoardTodoSize_1.isDomainBoardTodoSize));
};
exports.isDomainBoardTodoUpdateData = isDomainBoardTodoUpdateData;
