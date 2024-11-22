import { DomainTodoStatus } from './DomainTodoStatus';
export type DomainTodoCreateData = {
    title: string;
    description: string;
    dueTime: number;
    status: DomainTodoStatus;
};
export declare const isDomainTodoCreateData: (data: unknown) => data is DomainTodoCreateData;
