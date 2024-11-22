export var DomainBoardUserStatus;
(function (DomainBoardUserStatus) {
    DomainBoardUserStatus["CURSOR"] = "cursor";
    DomainBoardUserStatus["DRAG"] = "drag";
    DomainBoardUserStatus["RESIZE"] = "resize";
})(DomainBoardUserStatus || (DomainBoardUserStatus = {}));
export const idDomainBoardUserStatus = function (data) {
    switch (data) {
        case DomainBoardUserStatus.CURSOR:
        case DomainBoardUserStatus.DRAG:
        case DomainBoardUserStatus.RESIZE:
            return true;
        default:
            return false;
    }
};
