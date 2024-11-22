import {
    isNumber,
    isObject,
} from '@vanyamate/types-kit';


export type DomainBoardTodoPosition = {
    top: number;
    left: number;
    rotation: number;
}

export const isDomainBoardTodoPosition = function (data: unknown): data is DomainBoardTodoPosition {
    return (
        isObject(data) &&
        isNumber(data['top']) &&
        isNumber(data['left']) &&
        isNumber(data['rotation'])
    );
};