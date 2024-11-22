import { isNumber, isObject, isString, } from '@vanyamate/types-kit';
import { isDomainTodoStatus } from './DomainTodoStatus';
export const isDomainTodo = function (data) {
    return (isObject(data) &&
        isString(data['id']) &&
        isString(data['title']) &&
        isString(data['description']) &&
        isNumber(data['createdTime']) &&
        isNumber(data['dueTime']) &&
        isDomainTodoStatus(data['status']));
};
