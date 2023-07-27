import { User, UserAction, UserActionTypes, UserState } from "../types/user";

const initialState: UserState = {
  currentUser: {
    username: null,
    id: null,
    email: null,
  },
  isAuth: false,
};

export const userReducer = (
  state = initialState,
  action: UserAction
): UserState => {
  switch (action.type) {
    case UserActionTypes.SET_USER:
      return { ...state, currentUser: action.value, isAuth: true };
    case UserActionTypes.LOGOUT:
      localStorage.removeItem("token");
      return { ...state, currentUser: {}, isAuth: false };
    default:
      return state;
  }
};

export const setUser = (user: User): UserAction => ({ type: UserActionTypes.SET_USER, value: user });
export const logout = () => ({ type: UserActionTypes.LOGOUT });
