export enum DomainTodoStatus {
    PENDING   = 'pending',
    WIP       = 'wip',
    COMPLETED = 'completed'
}

export const isDomainTodoStatus = function (data: unknown): data is DomainTodoStatus {
    switch (data) {
        case DomainTodoStatus.PENDING:
        case DomainTodoStatus.WIP:
        case DomainTodoStatus.COMPLETED:
            return true;
        default:
            return false;
    }
};