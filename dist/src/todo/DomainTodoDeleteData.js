import { isObject, isString, } from '@vanyamate/types-kit';
export const isDomainTodoDeleteData = function (data) {
    return (isObject(data) &&
        isString(data['id']));
};
