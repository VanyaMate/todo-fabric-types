import { DomainBoardUserActivity } from '../../../board/user/DomainBoardUserActivity';
export type DomainNotificationBoardUserActivityUpdate = {
    id: string;
    activity: DomainBoardUserActivity;
};
export declare const isDomainNotificationBoardUserActivityUpdate: (data: unknown) => data is DomainNotificationBoardUserActivityUpdate;
