import { Dispatch, SetStateAction } from "react";

export type EditorContextType = {
  Markdown: string;
  setMarkdown: Dispatch<SetStateAction<string>>;
  CurrentLine: number;
  setCurrentLine: Dispatch<SetStateAction<number>>;
  changeEditor: (
    refRender: React.RefObject<HTMLDivElement>,
    value: string | undefined,
    event?: any
  ) => void;
  renderToMarkdown: (
    refRender: React.RefObject<HTMLDivElement>,
    markdown: string
  ) => void;
  refRender: React.RefObject<HTMLDivElement>;
};
