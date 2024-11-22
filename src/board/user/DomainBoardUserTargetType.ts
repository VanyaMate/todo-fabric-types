export enum DomainBoardUserTargetType {
    NONE = 'none',
    TODO = 'todo'
}

export const isDomainBoardUserTargetType = function (data: unknown): data is DomainBoardUserTargetType {
    switch (data) {
        case DomainBoardUserTargetType.NONE:
        case DomainBoardUserTargetType.TODO:
            return true;
        default:
            return false;
    }
};