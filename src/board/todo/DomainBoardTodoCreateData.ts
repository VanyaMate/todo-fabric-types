import {
    isObject,
} from '@vanyamate/types-kit';
import {
    DomainBoardTodoPosition,
    isDomainBoardTodoPosition,
} from './DomainBoardTodoPosition';
import { DomainBoardTodoSize, isDomainBoardTodoSize } from './DomainBoardTodoSize';
import {
    DomainTodoCreateData,
    isDomainTodoCreateData,
} from '../../todo/DomainTodoCreateData';


export type DomainBoardTodoCreateData = {
    todo: DomainTodoCreateData;
    position: DomainBoardTodoPosition;
    size: DomainBoardTodoSize;
}

export const isDomainBoardTodoCreateData = function (data: unknown): data is DomainBoardTodoCreateData {
    return (
        isObject(data) &&
        isDomainTodoCreateData(data['todo']) &&
        isDomainBoardTodoPosition(data['position']) &&
        isDomainBoardTodoSize(data['size'])
    );
};