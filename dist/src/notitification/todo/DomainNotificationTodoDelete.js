import { isObject, isString, } from '@vanyamate/types-kit';
export const isDomainNotificationTodoDelete = function (data) {
    return (isObject(data) &&
        isString(data['id']));
};
