import { DomainTodo, isDomainTodo } from '../../todo/DomainTodo';


export type DomainNotificationTodoCreate = DomainTodo;

export const isDomainNotificationTodoCreate = function (data: unknown): data is DomainNotificationTodoCreate {
    return isDomainTodo(data);
};