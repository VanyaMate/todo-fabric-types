import { DomainTodoUpdateData } from '../../todo/DomainTodoUpdateData';
export type DomainNotificationTodoUpdate = {
    id: string;
    data: DomainTodoUpdateData;
};
export declare const isDomainNotificationTodoUpdate: (data: unknown) => data is DomainNotificationTodoUpdate;
