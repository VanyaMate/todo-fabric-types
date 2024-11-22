import { isObject, isString, } from '@vanyamate/types-kit';
export const isDomainUser = function (data) {
    return (isObject(data) &&
        isString(data['id']) &&
        isString(data['name']));
};
