import {
    isObject,
    isString,
} from '@vanyamate/types-kit';
import {
    DomainBoardUserActivity, isDomainBoardUserActivity,
} from '../../../board/user/DomainBoardUserActivity';


export type DomainNotificationBoardUserActivityUpdate = {
    id: string;
    activity: DomainBoardUserActivity;
}

export const isDomainNotificationBoardUserActivityUpdate = function (data: unknown): data is DomainNotificationBoardUserActivityUpdate {
    return (
        isObject(data) &&
        isString(data['id']) &&
        isDomainBoardUserActivity(data['activity'])
    );
};