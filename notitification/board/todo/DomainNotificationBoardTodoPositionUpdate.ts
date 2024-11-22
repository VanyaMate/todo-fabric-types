import {
    isObject,
    isString,
} from '@vanyamate/types-kit';
import {
    DomainBoardTodoPosition,
    isDomainBoardTodoPosition,
} from '../../../board/todo/DomainBoardTodoPosition';


export type DomainNotificationBoardTodoPositionUpdate = {
    id: string;
    position: DomainBoardTodoPosition;
}

export const isDomainNotificationBoardTodoPositionUpdate = function (data: unknown): data is DomainNotificationBoardTodoPositionUpdate {
    return (
        isObject(data) &&
        isString(data['id']) &&
        isDomainBoardTodoPosition(data['position'])
    );
};