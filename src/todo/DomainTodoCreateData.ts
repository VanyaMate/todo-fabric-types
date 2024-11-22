import {
    isNumber,
    isObject,
    isString,
} from '@vanyamate/types-kit';
import { DomainTodoStatus, isDomainTodoStatus } from './DomainTodoStatus';


export type DomainTodoCreateData = {
    title: string;
    description: string;
    dueTime: number;
    status: DomainTodoStatus;
}

export const isDomainTodoCreateData = function (data: unknown): data is DomainTodoCreateData {
    return (
        isObject(data) &&
        isString(data['title']) &&
        isString(data['description']) &&
        isNumber(data['dueTime']) &&
        isDomainTodoStatus(data['status'])
    );
};