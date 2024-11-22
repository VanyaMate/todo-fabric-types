export declare enum DomainTodoStatus {
    PENDING = "pending",
    WIP = "wip",
    COMPLETED = "completed"
}
export declare const isDomainTodoStatus: (data: unknown) => data is DomainTodoStatus;
