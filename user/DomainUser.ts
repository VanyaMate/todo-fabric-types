import {
    isObject,
    isString,
} from '@vanyamate/types-kit';


export type DomainUser = {
    id: string;
    name: string;
}

export const isDomainUser = function (data: unknown): data is DomainUser {
    return (
        isObject(data) &&
        isString(data['id']) &&
        isString(data['name'])
    );
};