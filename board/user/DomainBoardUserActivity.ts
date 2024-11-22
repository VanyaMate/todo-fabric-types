import {
    isObject,
} from '@vanyamate/types-kit';
import {
    DomainBoardUserStatus,
    idDomainBoardUserStatus,
} from './DomainBoardUserStatus';
import {
    DomainBoardUserTarget,
    isDomainBoardUserTarget,
} from './DomainBoardUserTarget';


export type DomainBoardUserActivity = {
    status: DomainBoardUserStatus;
    target: DomainBoardUserTarget;
}

export const isDomainBoardUserActivity = function (data: unknown): data is DomainBoardUserActivity {
    return (
        isObject(data) &&
        idDomainBoardUserStatus(data['status']) &&
        isDomainBoardUserTarget(data['target'])
    );
};