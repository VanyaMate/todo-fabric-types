import { isNumber, isObject, } from '@vanyamate/types-kit';
export const isDomainBoardTodoPosition = function (data) {
    return (isObject(data) &&
        isNumber(data['top']) &&
        isNumber(data['left']) &&
        isNumber(data['rotation']));
};
