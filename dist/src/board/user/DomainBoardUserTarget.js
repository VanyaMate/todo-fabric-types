import { isObject, isString, } from '@vanyamate/types-kit';
import { isDomainBoardUserTargetType, } from './DomainBoardUserTargetType';
export const isDomainBoardUserTarget = function (data) {
    return (isObject(data) &&
        isString(data['id']) &&
        isDomainBoardUserTargetType(data['type']));
};
