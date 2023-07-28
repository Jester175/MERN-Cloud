import { IFile } from "../../types/file";

export interface FileState {
  files: IFile[];
  currentDir: null | number;
  dirStack: number[]
}

export enum FileActionTypes {
  SET_FILES = "SET_FILES",
  SET_CURRENT_DIR = "SET_CURRENT_DIR",
  ADD_FILE = "ADD_FILE",
  PUSH_TO_SATCK = "PUSH_TO_SATCK",
}

interface SetFilesAction {
  type: FileActionTypes.SET_FILES
  value: IFile[];
}

interface AddFileAction {
  type: FileActionTypes.ADD_FILE
  value: IFile;
}

interface SetCurrentDirAction {
  type: FileActionTypes.SET_CURRENT_DIR
  value: null | number;
}

interface PushToStack {
  type: FileActionTypes.PUSH_TO_SATCK
  value: number;
}

export type FileAction = SetFilesAction | SetCurrentDirAction | AddFileAction | PushToStack;
