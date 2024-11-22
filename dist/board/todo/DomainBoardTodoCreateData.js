"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isDomainBoardTodoCreateData = void 0;
var types_kit_1 = require("@vanyamate/types-kit");
var DomainBoardTodoPosition_1 = require("./DomainBoardTodoPosition");
var DomainBoardTodoSize_1 = require("./DomainBoardTodoSize");
var DomainTodoCreateData_1 = require("../../todo/DomainTodoCreateData");
var isDomainBoardTodoCreateData = function (data) {
    return ((0, types_kit_1.isObject)(data) &&
        (0, DomainTodoCreateData_1.isDomainTodoCreateData)(data['todo']) &&
        (0, DomainBoardTodoPosition_1.isDomainBoardTodoPosition)(data['position']) &&
        (0, DomainBoardTodoSize_1.isDomainBoardTodoSize)(data['size']));
};
exports.isDomainBoardTodoCreateData = isDomainBoardTodoCreateData;
