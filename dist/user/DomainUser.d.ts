export type DomainUser = {
    id: string;
    name: string;
};
export declare const isDomainUser: (data: unknown) => data is DomainUser;
