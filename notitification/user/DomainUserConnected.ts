import {
    isObject,
    isString,
} from '@vanyamate/types-kit';
import { DomainUser, isDomainUser } from '../../user/DomainUser';


export type DomainUserConnected = {
    user: DomainUser;
}

export const isDomainUserConnected = function (data: unknown): data is DomainUserConnected {
    return (
        isObject(data) &&
        isDomainUser(data['user'])
    );
};