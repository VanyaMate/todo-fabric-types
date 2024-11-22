import {
    TypeGuard,
    isObject,
    isNumber,
} from '@vanyamate/types-kit';


export type DomainBoardTodoSize = {
    width: number;
    height: number;
}

export const isDomainBoardTodoSize: TypeGuard<DomainBoardTodoSize> = function (data): data is DomainBoardTodoSize {
    return (
        isObject(data) &&
        isNumber(data['width']) &&
        isNumber(data['height'])
    );
};