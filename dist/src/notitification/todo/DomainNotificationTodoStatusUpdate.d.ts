import { DomainTodoStatus } from '../../todo/DomainTodoStatus';
export type DomainNotificationTodoStatusUpdate = {
    id: string;
    status: DomainTodoStatus;
};
export declare const isDomainNotificationTodoStatusUpdate: (data: unknown) => data is DomainNotificationTodoStatusUpdate;
