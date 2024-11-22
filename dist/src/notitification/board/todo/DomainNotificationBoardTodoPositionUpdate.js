import { isObject, isString, } from '@vanyamate/types-kit';
import { isDomainBoardTodoPosition, } from '../../../board/todo/DomainBoardTodoPosition';
export const isDomainNotificationBoardTodoPositionUpdate = function (data) {
    return (isObject(data) &&
        isString(data['id']) &&
        isDomainBoardTodoPosition(data['position']));
};
