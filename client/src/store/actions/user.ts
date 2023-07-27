import { Dispatch } from "redux";
import { CloudApi } from "../../services/api";
import { setUser } from "../reducers/userReducer";
import { UserAction } from "../types/user";

export const registration = async (
  email: string,
  password: string,
  username: string
) => {
  try {
    await CloudApi.registration(email, password, username);
  } catch (error: any) {
    if (error) {
      alert(error.response.data.message);
    }
  }
};

export const login =
  (email: string, password: string) =>
  async (dispatch: Dispatch<UserAction>) => {
    try {
      const res = await CloudApi.login(email, password);
      dispatch(setUser(res.data.user));
      localStorage.setItem("token", res.data.token);
    } catch (error: any) {
      if (error) {
        alert(error.response.data.message);
      }
    }
  };
