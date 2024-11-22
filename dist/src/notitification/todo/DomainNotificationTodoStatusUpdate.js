import { isObject, isString, } from '@vanyamate/types-kit';
import { isDomainTodoStatus, } from '../../todo/DomainTodoStatus';
export const isDomainNotificationTodoStatusUpdate = function (data) {
    return (isObject(data) &&
        isString(data['id']) &&
        isDomainTodoStatus(data['status']));
};
