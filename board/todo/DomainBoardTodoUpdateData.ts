import {
    isObject,
    isOptional,
} from '@vanyamate/types-kit';
import {
    DomainBoardTodoPosition,
    isDomainBoardTodoPosition,
} from './DomainBoardTodoPosition';
import {
    DomainBoardTodoSize,
    isDomainBoardTodoSize,
} from './DomainBoardTodoSize';
import {
    DomainTodoUpdateData,
    isDomainTodoUpdateData,
} from '../../todo/DomainTodoUpdateData';


export type DomainBoardTodoUpdateData = Partial<{
    todo: DomainTodoUpdateData;
    position: DomainBoardTodoPosition;
    size: DomainBoardTodoSize;
}>;

export const isDomainBoardTodoUpdateData = function (data: unknown): data is DomainBoardTodoUpdateData {
    return (
        isObject(data) &&
        isOptional(data['todo'], isDomainTodoUpdateData) &&
        isOptional(data['position'], isDomainBoardTodoPosition) &&
        isOptional(data['size'], isDomainBoardTodoSize)
    );
};