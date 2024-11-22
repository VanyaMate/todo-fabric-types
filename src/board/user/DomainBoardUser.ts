import {
    isObject,
} from '@vanyamate/types-kit';
import { DomainUser, isDomainUser } from '../../user/DomainUser';
import {
    DomainBoardUserPosition,
    isDomainBoardUserPosition,
} from './DomainBoardUserPosition';
import {
    DomainBoardUserActivity,
    isDomainBoardUserActivity,
} from './DomainBoardUserActivity';


export type DomainBoardUser = {
    user: DomainUser;
    position: DomainBoardUserPosition;
    activity: DomainBoardUserActivity;
}

export const isDomainBoardUser = function (data: unknown): data is DomainBoardUser {
    return (
        isObject(data) &&
        isDomainUser(data['user']) &&
        isDomainBoardUserPosition(data['position']) &&
        isDomainBoardUserActivity(data['activity'])
    );
};