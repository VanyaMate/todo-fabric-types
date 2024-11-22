import {
    isObject,
    isString,
} from '@vanyamate/types-kit';


export type DomainUserDisconnected = {
    id: string;
}

export const isDomainUserDisconnected = function (data: unknown): data is DomainUserDisconnected {
    return (
        isObject(data) &&
        isString(data['id'])
    );
};