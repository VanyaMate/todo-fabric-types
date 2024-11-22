import { isDomainTodo } from '../../todo/DomainTodo';
export const isDomainNotificationTodoCreate = function (data) {
    return isDomainTodo(data);
};
