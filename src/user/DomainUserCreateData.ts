import {
    isObject,
    isString,
} from '@vanyamate/types-kit';


export type DomainUserCreateData = {
    name: string;
}

export const isDomainUserCreateData = function (data: unknown): data is DomainUserCreateData {
    return (
        isObject(data) &&
        isString(data['name'])
    );
};