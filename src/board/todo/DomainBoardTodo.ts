import {
    isObject,
} from '@vanyamate/types-kit';
import { DomainTodo, isDomainTodo } from '../../todo/DomainTodo';
import {
    DomainBoardTodoPosition,
    isDomainBoardTodoPosition,
} from './DomainBoardTodoPosition';
import { DomainBoardTodoSize, isDomainBoardTodoSize } from './DomainBoardTodoSize';


export type DomainBoardTodo = {
    todo: DomainTodo;
    position: DomainBoardTodoPosition;
    size: DomainBoardTodoSize;
}

export const isDomainBoardTodo = function (data: unknown): data is DomainBoardTodo {
    return (
        isObject(data) &&
        isDomainTodo(data['todo']) &&
        isDomainBoardTodoPosition(data['position']) &&
        isDomainBoardTodoSize(data['size'])
    );
};