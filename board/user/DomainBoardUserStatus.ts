export enum DomainBoardUserStatus {
    CURSOR = 'cursor',
    DRAG   = 'drag',
    RESIZE = 'resize'
}

export const idDomainBoardUserStatus = function (data: unknown): data is DomainBoardUserStatus {
    switch (data) {
        case DomainBoardUserStatus.CURSOR:
        case DomainBoardUserStatus.DRAG:
        case DomainBoardUserStatus.RESIZE:
            return true;
        default:
            return false;
    }
};