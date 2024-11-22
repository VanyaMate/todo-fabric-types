import { isObject, isString, } from '@vanyamate/types-kit';
export const isDomainUserCreateData = function (data) {
    return (isObject(data) &&
        isString(data['name']));
};
