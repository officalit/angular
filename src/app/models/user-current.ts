import { Role } from './role';

export class CurrentUser {
    id: number;
    username: string;
    firstName: string;
    lastName: string;
    roles: Role[] = [];
    token?: string;
}