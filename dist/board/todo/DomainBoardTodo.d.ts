import { DomainTodo } from '../../todo/DomainTodo';
import { DomainBoardTodoPosition } from './DomainBoardTodoPosition';
import { DomainBoardTodoSize } from './DomainBoardTodoSize';
export type DomainBoardTodo = {
    todo: DomainTodo;
    position: DomainBoardTodoPosition;
    size: DomainBoardTodoSize;
};
export declare const isDomainBoardTodo: (data: unknown) => data is DomainBoardTodo;
