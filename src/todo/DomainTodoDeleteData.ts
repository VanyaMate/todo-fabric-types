import {
    isObject,
    isString,
} from '@vanyamate/types-kit';


export type DomainTodoDeleteData = {
    id: string;
}

export const isDomainTodoDeleteData = function (data: unknown): data is DomainTodoDeleteData {
    return (
        isObject(data) &&
        isString(data['id'])
    );
};