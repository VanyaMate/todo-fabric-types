"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.idDomainBoardUserStatus = exports.DomainBoardUserStatus = void 0;
var DomainBoardUserStatus;
(function (DomainBoardUserStatus) {
    DomainBoardUserStatus["CURSOR"] = "cursor";
    DomainBoardUserStatus["DRAG"] = "drag";
    DomainBoardUserStatus["RESIZE"] = "resize";
})(DomainBoardUserStatus || (exports.DomainBoardUserStatus = DomainBoardUserStatus = {}));
var idDomainBoardUserStatus = function (data) {
    switch (data) {
        case DomainBoardUserStatus.CURSOR:
        case DomainBoardUserStatus.DRAG:
        case DomainBoardUserStatus.RESIZE:
            return true;
        default:
            return false;
    }
};
exports.idDomainBoardUserStatus = idDomainBoardUserStatus;
