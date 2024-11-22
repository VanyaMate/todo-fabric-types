import { DomainBoardUserStatus } from './DomainBoardUserStatus';
import { DomainBoardUserTarget } from './DomainBoardUserTarget';
export type DomainBoardUserActivity = {
    status: DomainBoardUserStatus;
    target: DomainBoardUserTarget;
};
export declare const isDomainBoardUserActivity: (data: unknown) => data is DomainBoardUserActivity;
