import { isNumber, isObject, isOptional, isString, } from '@vanyamate/types-kit';
import { isDomainTodoStatus } from './DomainTodoStatus';
export const isDomainTodoUpdateData = function (data) {
    return (isObject(data) &&
        isOptional(data['title'], isString) &&
        isOptional(data['description'], isString) &&
        isOptional(data['dueTime'], isNumber) &&
        isOptional(data['status'], isDomainTodoStatus));
};
