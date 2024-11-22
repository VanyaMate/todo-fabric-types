import { DomainBoardTodoPosition } from './DomainBoardTodoPosition';
import { DomainBoardTodoSize } from './DomainBoardTodoSize';
import { DomainTodoCreateData } from '../../todo/DomainTodoCreateData';
export type DomainBoardTodoCreateData = {
    todo: DomainTodoCreateData;
    position: DomainBoardTodoPosition;
    size: DomainBoardTodoSize;
};
export declare const isDomainBoardTodoCreateData: (data: unknown) => data is DomainBoardTodoCreateData;
