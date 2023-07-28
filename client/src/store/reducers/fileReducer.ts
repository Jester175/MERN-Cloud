import { IFile } from "../../types/file";
import { FileAction, FileActionTypes, FileState } from "../types/file";

const initialState: FileState = {
  files: [],
  currentDir: null,
  dirStack: [],
};

export const fileReducer = (
  state = initialState,
  action: FileAction
): FileState => {
  switch (action.type) {
    case FileActionTypes.SET_FILES:
      return { ...state, files: action.value };
    case FileActionTypes.SET_CURRENT_DIR:
      return { ...state, currentDir: action.value };
    case FileActionTypes.ADD_FILE:
      return { ...state, files: [...state.files, action.value] };
    case FileActionTypes.PUSH_TO_SATCK:
      return { ...state, dirStack: [...state.dirStack, action.value] };
    default:
      return state;
  }
};

export const setFiles = (files: IFile[]) => ({
  type: FileActionTypes.SET_FILES,
  value: files,
} as const);

export const setCurrentDir = (dir: number | undefined) => ({
  type: FileActionTypes.SET_CURRENT_DIR,
  value: dir,
});

export const addFile = (file: IFile) => ({
  type: FileActionTypes.ADD_FILE,
  value: file,
} as const);

export const pushToStack = (dir: number | null) => ({
  type: FileActionTypes.PUSH_TO_SATCK,
  value: dir,
} as const);
