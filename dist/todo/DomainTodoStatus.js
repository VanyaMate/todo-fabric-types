"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isDomainTodoStatus = exports.DomainTodoStatus = void 0;
var DomainTodoStatus;
(function (DomainTodoStatus) {
    DomainTodoStatus["PENDING"] = "pending";
    DomainTodoStatus["WIP"] = "wip";
    DomainTodoStatus["COMPLETED"] = "completed";
})(DomainTodoStatus || (exports.DomainTodoStatus = DomainTodoStatus = {}));
var isDomainTodoStatus = function (data) {
    switch (data) {
        case DomainTodoStatus.PENDING:
        case DomainTodoStatus.WIP:
        case DomainTodoStatus.COMPLETED:
            return true;
        default:
            return false;
    }
};
exports.isDomainTodoStatus = isDomainTodoStatus;
