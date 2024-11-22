import { isObject, isString, } from '@vanyamate/types-kit';
export const isDomainUserDisconnected = function (data) {
    return (isObject(data) &&
        isString(data['id']));
};
