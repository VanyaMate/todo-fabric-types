import { isObject, } from '@vanyamate/types-kit';
import { isDomainUser } from '../../user/DomainUser';
export const isDomainUserConnected = function (data) {
    return (isObject(data) &&
        isDomainUser(data['user']));
};
