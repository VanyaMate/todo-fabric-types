import { isNumber, isObject, } from '@vanyamate/types-kit';
export const isDomainBoardUserPosition = function (data) {
    return (isObject(data) &&
        isNumber(data['top']) &&
        isNumber(data['left']));
};
