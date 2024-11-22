import { isObject, isOptional, } from '@vanyamate/types-kit';
import { isDomainBoardTodoPosition, } from './DomainBoardTodoPosition';
import { isDomainBoardTodoSize, } from './DomainBoardTodoSize';
import { isDomainTodoUpdateData, } from '../../todo/DomainTodoUpdateData';
export const isDomainBoardTodoUpdateData = function (data) {
    return (isObject(data) &&
        isOptional(data['todo'], isDomainTodoUpdateData) &&
        isOptional(data['position'], isDomainBoardTodoPosition) &&
        isOptional(data['size'], isDomainBoardTodoSize));
};
