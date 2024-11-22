import { isObject, } from '@vanyamate/types-kit';
import { isDomainTodo } from '../../todo/DomainTodo';
import { isDomainBoardTodoPosition, } from './DomainBoardTodoPosition';
import { isDomainBoardTodoSize } from './DomainBoardTodoSize';
export const isDomainBoardTodo = function (data) {
    return (isObject(data) &&
        isDomainTodo(data['todo']) &&
        isDomainBoardTodoPosition(data['position']) &&
        isDomainBoardTodoSize(data['size']));
};
