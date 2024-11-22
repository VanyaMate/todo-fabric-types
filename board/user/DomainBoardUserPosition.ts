import {
    isNumber,
    isObject,
} from '@vanyamate/types-kit';


export type DomainBoardUserPosition = {
    top: number;
    left: number;
}

export const isDomainBoardUserPosition = function (data: unknown): data is DomainBoardUserPosition {
    return (
        isObject(data) &&
        isNumber(data['top']) &&
        isNumber(data['left'])
    );
};