import { isObject, isString, } from '@vanyamate/types-kit';
import { isDomainBoardUserActivity, } from '../../../board/user/DomainBoardUserActivity';
export const isDomainNotificationBoardUserActivityUpdate = function (data) {
    return (isObject(data) &&
        isString(data['id']) &&
        isDomainBoardUserActivity(data['activity']));
};
