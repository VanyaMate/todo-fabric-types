import { DomainBoardTodoPosition } from './DomainBoardTodoPosition';
import { DomainBoardTodoSize } from './DomainBoardTodoSize';
import { DomainTodoUpdateData } from '../../todo/DomainTodoUpdateData';
export type DomainBoardTodoUpdateData = Partial<{
    todo: DomainTodoUpdateData;
    position: DomainBoardTodoPosition;
    size: DomainBoardTodoSize;
}>;
export declare const isDomainBoardTodoUpdateData: (data: unknown) => data is DomainBoardTodoUpdateData;
