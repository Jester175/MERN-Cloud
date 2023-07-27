export interface UserState {
  currentUser: User | {}
  isAuth: boolean;
}

export interface User {
  username: string | null;
  id: string | null;
  email: string | null;
}

export enum UserActionTypes {
  SET_USER = "SET_USER",
  LOGOUT = "LOGOUT",
}

interface SetUserAction {
  type: UserActionTypes.SET_USER;
  value: User;
}

interface LogoutAction {
  type: UserActionTypes.LOGOUT;
}

export type UserAction = LogoutAction | SetUserAction;
