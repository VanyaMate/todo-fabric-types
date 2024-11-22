import { isObject, isString, } from '@vanyamate/types-kit';
import { isDomainBoardUserPosition, } from '../../../board/user/DomainBoardUserPosition';
export const isDomainNotificationBoardUserPositionUpdate = function (data) {
    return (isObject(data) &&
        isString(data['id']) &&
        isDomainBoardUserPosition(data['position']));
};
