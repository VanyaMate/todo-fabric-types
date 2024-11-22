import { DomainBoardUserTargetType } from './DomainBoardUserTargetType';
export type DomainBoardUserTarget = {
    id: string;
    type: DomainBoardUserTargetType;
};
export declare const isDomainBoardUserTarget: (data: unknown) => data is DomainBoardUserTarget;
