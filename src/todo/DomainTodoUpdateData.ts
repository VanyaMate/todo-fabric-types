import {
    isNumber,
    isObject, isOptional,
    isString,
} from '@vanyamate/types-kit';
import { DomainTodoStatus, isDomainTodoStatus } from './DomainTodoStatus';


export type DomainTodoUpdateData = Partial<{
    title: string;
    description: string;
    dueTime: number;
    status: DomainTodoStatus;
}>;

export const isDomainTodoUpdateData = function (data: unknown): data is DomainTodoUpdateData {
    return (
        isObject(data) &&
        isOptional(data['title'], isString) &&
        isOptional(data['description'], isString) &&
        isOptional(data['dueTime'], isNumber) &&
        isOptional(data['status'], isDomainTodoStatus)
    );
};