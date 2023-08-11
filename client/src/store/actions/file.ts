import { Dispatch } from "redux";
import { CloudApi } from "../../services/api";
import { FileAction } from "../types/file";
import { addFile, setFiles } from "../reducers/fileReducer";

export const getFiles =
  (dirId: number | null) => async (dispatch: Dispatch<FileAction>) => {
    try {
      const token = localStorage.getItem("token");
      const res = await CloudApi.getFiles(dirId, token);
      dispatch(setFiles(res.data));
    } catch (error: any) {
      alert(error);
      localStorage.removeItem("token");
    }
  };

export const createDir =
  (dirId: number | null, name: string) =>
  async (dispatch: Dispatch<FileAction>) => {
    try {
      const token = localStorage.getItem("token");
      const res = await CloudApi.createDir(dirId, token, name);
      dispatch(addFile(res.data));
    } catch (error: any) {
      alert(error);
      localStorage.removeItem("token");
    }
  };

export const uploadFile =
  (dirId: any, file: any) =>
  async (dispatch: Dispatch<FileAction>) => {
    try {
      const formData = new FormData();
      formData.append("file", file);
      if (dirId) {
        formData.append("parent", dirId);
      }
      const token = localStorage.getItem("token");
      const res = await CloudApi.uploadFile(token, formData);
      dispatch(addFile(res.data));
    } catch (error: any) {
      alert(error.response.data.message);
    }
  };
