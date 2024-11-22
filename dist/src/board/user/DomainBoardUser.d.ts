import { DomainUser } from '../../user/DomainUser';
import { DomainBoardUserPosition } from './DomainBoardUserPosition';
import { DomainBoardUserActivity } from './DomainBoardUserActivity';
export type DomainBoardUser = {
    user: DomainUser;
    position: DomainBoardUserPosition;
    activity: DomainBoardUserActivity;
};
export declare const isDomainBoardUser: (data: unknown) => data is DomainBoardUser;
