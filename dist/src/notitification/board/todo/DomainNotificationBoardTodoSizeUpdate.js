import { isObject, isString, } from '@vanyamate/types-kit';
import { isDomainBoardTodoSize, } from '../../../board/todo/DomainBoardTodoSize';
export const isDomainNotificationBoardTodoSizeUpdate = function (data) {
    return (isObject(data) &&
        isString(data['id']) &&
        isDomainBoardTodoSize(data['size']));
};
