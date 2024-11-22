import {
    isObject,
    isString,
} from '@vanyamate/types-kit';
import {
    DomainTodoStatus,
    isDomainTodoStatus,
} from '../../todo/DomainTodoStatus';


export type DomainNotificationTodoStatusUpdate = {
    id: string;
    status: DomainTodoStatus;
}

export const isDomainNotificationTodoStatusUpdate = function (data: unknown): data is DomainNotificationTodoStatusUpdate {
    return (
        isObject(data) &&
        isString(data['id']) &&
        isDomainTodoStatus(data['status'])
    );
};