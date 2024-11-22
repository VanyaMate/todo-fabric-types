import {
    isObject,
    isString,
} from '@vanyamate/types-kit';


export type DomainNotificationTodoDelete = {
    id: string;
}

export const isDomainNotificationTodoDelete = function (data: unknown): data is DomainNotificationTodoDelete {
    return (
        isObject(data) &&
        isString(data['id'])
    );
};