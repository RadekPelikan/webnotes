import { Record } from "pocketbase";

export type ReactElement = {
  children?: JSX.Element | JSX.Element[];
  className?: string;
};

export type ClientApiProps = {
  serverIP: string;
};

export type Note = {
  title: string;
  content: string;
}

export interface MainProps extends ReactElement {
  center?: boolean;
}


export interface NoteCardWrapperProps extends ReactElement {
  id: string;
}

export interface DeleteNoteIconProps extends ReactElement, ClientApiProps {
  id: string;
}

export interface CreateNoteProps extends ClientApiProps {}

export interface NotePageProps extends ReactElement {
  params: {id: string};
}
