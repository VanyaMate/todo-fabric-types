"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isDomainBoardUserTargetType = exports.DomainBoardUserTargetType = void 0;
var DomainBoardUserTargetType;
(function (DomainBoardUserTargetType) {
    DomainBoardUserTargetType["NONE"] = "none";
    DomainBoardUserTargetType["TODO"] = "todo";
})(DomainBoardUserTargetType || (exports.DomainBoardUserTargetType = DomainBoardUserTargetType = {}));
var isDomainBoardUserTargetType = function (data) {
    switch (data) {
        case DomainBoardUserTargetType.NONE:
        case DomainBoardUserTargetType.TODO:
            return true;
        default:
            return false;
    }
};
exports.isDomainBoardUserTargetType = isDomainBoardUserTargetType;
