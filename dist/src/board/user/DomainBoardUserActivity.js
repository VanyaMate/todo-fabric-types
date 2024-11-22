import { isObject, } from '@vanyamate/types-kit';
import { idDomainBoardUserStatus, } from './DomainBoardUserStatus';
import { isDomainBoardUserTarget, } from './DomainBoardUserTarget';
export const isDomainBoardUserActivity = function (data) {
    return (isObject(data) &&
        idDomainBoardUserStatus(data['status']) &&
        isDomainBoardUserTarget(data['target']));
};
