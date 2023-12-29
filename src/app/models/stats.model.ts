export interface UserStats {
  user: User;
  rank?: number;
  name: string;
  avatar: string;
}

export interface User {
  id: string;
  steamId: string;
  name: string;
  avatar: string;
  roleId?: any;
  roleName?: any;
  roleColor?: any;
  lastSessionId: string;
}
