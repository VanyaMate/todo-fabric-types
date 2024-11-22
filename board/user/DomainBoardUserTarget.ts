import {
    isObject,
    isString,
} from '@vanyamate/types-kit';
import {
    DomainBoardUserTargetType,
    isDomainBoardUserTargetType,
} from './DomainBoardUserTargetType';


export type DomainBoardUserTarget = {
    id: string;
    type: DomainBoardUserTargetType;
}

export const isDomainBoardUserTarget = function (data: unknown): data is DomainBoardUserTarget {
    return (
        isObject(data) &&
        isString(data['id']) &&
        isDomainBoardUserTargetType(data['type'])
    );
};