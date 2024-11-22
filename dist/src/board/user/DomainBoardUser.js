import { isObject, } from '@vanyamate/types-kit';
import { isDomainUser } from '../../user/DomainUser';
import { isDomainBoardUserPosition, } from './DomainBoardUserPosition';
import { isDomainBoardUserActivity, } from './DomainBoardUserActivity';
export const isDomainBoardUser = function (data) {
    return (isObject(data) &&
        isDomainUser(data['user']) &&
        isDomainBoardUserPosition(data['position']) &&
        isDomainBoardUserActivity(data['activity']));
};
