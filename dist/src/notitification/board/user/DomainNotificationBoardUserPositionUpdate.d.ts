import { DomainBoardUserPosition } from '../../../board/user/DomainBoardUserPosition';
export type DomainNotificationBoardUserPositionUpdate = {
    id: string;
    position: DomainBoardUserPosition;
};
export declare const isDomainNotificationBoardUserPositionUpdate: (data: unknown) => data is DomainNotificationBoardUserPositionUpdate;
