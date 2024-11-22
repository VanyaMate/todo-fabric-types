export var DomainBoardUserTargetType;
(function (DomainBoardUserTargetType) {
    DomainBoardUserTargetType["NONE"] = "none";
    DomainBoardUserTargetType["TODO"] = "todo";
})(DomainBoardUserTargetType || (DomainBoardUserTargetType = {}));
export const isDomainBoardUserTargetType = function (data) {
    switch (data) {
        case DomainBoardUserTargetType.NONE:
        case DomainBoardUserTargetType.TODO:
            return true;
        default:
            return false;
    }
};
