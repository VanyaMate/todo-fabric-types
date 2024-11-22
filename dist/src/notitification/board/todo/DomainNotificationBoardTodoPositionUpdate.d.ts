import { DomainBoardTodoPosition } from '../../../board/todo/DomainBoardTodoPosition';
export type DomainNotificationBoardTodoPositionUpdate = {
    id: string;
    position: DomainBoardTodoPosition;
};
export declare const isDomainNotificationBoardTodoPositionUpdate: (data: unknown) => data is DomainNotificationBoardTodoPositionUpdate;
