import { isObject, isNumber, } from '@vanyamate/types-kit';
export const isDomainBoardTodoSize = function (data) {
    return (isObject(data) &&
        isNumber(data['width']) &&
        isNumber(data['height']));
};
