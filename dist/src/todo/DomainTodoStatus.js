export var DomainTodoStatus;
(function (DomainTodoStatus) {
    DomainTodoStatus["PENDING"] = "pending";
    DomainTodoStatus["WIP"] = "wip";
    DomainTodoStatus["COMPLETED"] = "completed";
})(DomainTodoStatus || (DomainTodoStatus = {}));
export const isDomainTodoStatus = function (data) {
    switch (data) {
        case DomainTodoStatus.PENDING:
        case DomainTodoStatus.WIP:
        case DomainTodoStatus.COMPLETED:
            return true;
        default:
            return false;
    }
};
