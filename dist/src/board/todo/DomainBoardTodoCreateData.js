import { isObject, } from '@vanyamate/types-kit';
import { isDomainBoardTodoPosition, } from './DomainBoardTodoPosition';
import { isDomainBoardTodoSize } from './DomainBoardTodoSize';
import { isDomainTodoCreateData, } from '../../todo/DomainTodoCreateData';
export const isDomainBoardTodoCreateData = function (data) {
    return (isObject(data) &&
        isDomainTodoCreateData(data['todo']) &&
        isDomainBoardTodoPosition(data['position']) &&
        isDomainBoardTodoSize(data['size']));
};
