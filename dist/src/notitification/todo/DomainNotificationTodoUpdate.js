import { isObject, isString, } from '@vanyamate/types-kit';
import { isDomainTodoUpdateData, } from '../../todo/DomainTodoUpdateData';
export const isDomainNotificationTodoUpdate = function (data) {
    return (isObject(data) &&
        isString(data['id']) &&
        isDomainTodoUpdateData(data['data']));
};
