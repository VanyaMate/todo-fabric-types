import { DomainTodoStatus } from './DomainTodoStatus';
export type DomainTodo = {
    id: string;
    title: string;
    description: string;
    createdTime: number;
    dueTime: number;
    status: DomainTodoStatus;
};
export declare const isDomainTodo: (data: unknown) => data is DomainTodo;
