import {
    isObject,
    isString,
} from '@vanyamate/types-kit';
import {
    DomainTodoUpdateData,
    isDomainTodoUpdateData,
} from '../../todo/DomainTodoUpdateData';


export type DomainNotificationTodoUpdate = {
    id: string;
    data: DomainTodoUpdateData;
}

export const isDomainNotificationTodoUpdate = function (data: unknown): data is DomainNotificationTodoUpdate {
    return (
        isObject(data) &&
        isString(data['id']) &&
        isDomainTodoUpdateData(data['data'])
    );
};