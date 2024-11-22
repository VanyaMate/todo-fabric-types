import { DomainTodoStatus } from './DomainTodoStatus';
export type DomainTodoUpdateData = Partial<{
    title: string;
    description: string;
    dueTime: number;
    status: DomainTodoStatus;
}>;
export declare const isDomainTodoUpdateData: (data: unknown) => data is DomainTodoUpdateData;
