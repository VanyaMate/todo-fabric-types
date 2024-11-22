import { DomainUser } from '../../user/DomainUser';
export type DomainUserConnected = {
    user: DomainUser;
};
export declare const isDomainUserConnected: (data: unknown) => data is DomainUserConnected;
