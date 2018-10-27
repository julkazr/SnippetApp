export class User {
  id?: string;
  fullName?: string;
  email?: string;
  password?: string;
  status?: UserStatus;
  isAdmin?: boolean;
  isBlocked?: boolean;
}

export enum UserStatus {
  Active = 'active', Inactive = 'inactive'
}
