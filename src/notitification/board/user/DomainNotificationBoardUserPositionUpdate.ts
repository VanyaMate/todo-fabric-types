import {
    isObject,
    isString,
} from '@vanyamate/types-kit';
import {
    DomainBoardUserPosition, isDomainBoardUserPosition,
} from '../../../board/user/DomainBoardUserPosition';


export type DomainNotificationBoardUserPositionUpdate = {
    id: string;
    position: DomainBoardUserPosition;
}

export const isDomainNotificationBoardUserPositionUpdate = function (data: unknown): data is DomainNotificationBoardUserPositionUpdate {
    return (
        isObject(data) &&
        isString(data['id']) &&
        isDomainBoardUserPosition(data['position'])
    );
};