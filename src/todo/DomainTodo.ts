import {
    isNumber,
    isObject,
    isString,
} from '@vanyamate/types-kit';
import { DomainTodoStatus, isDomainTodoStatus } from './DomainTodoStatus';


export type DomainTodo = {
    id: string;
    title: string;
    description: string;
    createdTime: number;
    dueTime: number;
    status: DomainTodoStatus;
}

export const isDomainTodo = function (data: unknown): data is DomainTodo {
    return (
        isObject(data) &&
        isString(data['id']) &&
        isString(data['title']) &&
        isString(data['description']) &&
        isNumber(data['createdTime']) &&
        isNumber(data['dueTime']) &&
        isDomainTodoStatus(data['status'])
    );
};