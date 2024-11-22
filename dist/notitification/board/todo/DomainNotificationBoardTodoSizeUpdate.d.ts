import { DomainBoardTodoSize } from '../../../board/todo/DomainBoardTodoSize';
export type DomainNotificationBoardTodoSizeUpdate = {
    id: string;
    size: DomainBoardTodoSize;
};
export declare const isDomainNotificationBoardTodoSizeUpdate: (data: unknown) => data is DomainNotificationBoardTodoSizeUpdate;
