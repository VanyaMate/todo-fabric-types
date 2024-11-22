import { isNumber, isObject, isString, } from '@vanyamate/types-kit';
import { isDomainTodoStatus } from './DomainTodoStatus';
export const isDomainTodoCreateData = function (data) {
    return (isObject(data) &&
        isString(data['title']) &&
        isString(data['description']) &&
        isNumber(data['dueTime']) &&
        isDomainTodoStatus(data['status']));
};
