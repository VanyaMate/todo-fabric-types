import {
    isObject,
    isString,
} from '@vanyamate/types-kit';
import {
    DomainBoardTodoSize,
    isDomainBoardTodoSize,
} from '../../../board/todo/DomainBoardTodoSize';


export type DomainNotificationBoardTodoSizeUpdate = {
    id: string;
    size: DomainBoardTodoSize;
}

export const isDomainNotificationBoardTodoSizeUpdate = function (data: unknown): data is DomainNotificationBoardTodoSizeUpdate {
    return (
        isObject(data) &&
        isString(data['id']) &&
        isDomainBoardTodoSize(data['size'])
    );
};