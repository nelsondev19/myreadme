import { createContext, useState, ReactNode, useRef } from "react";
import { marked } from "marked";
import hljs from "highlight.js";

// STATE FOR SHOW EDITOR

const Context = createContext({});

Context.displayName = "EditorContext";

interface Props {
  children: ReactNode;
}
export function EditorProvider({ children }: Props) {
  const [Markdown, setMarkdown] = useState("# Hello!");

  const [CurrentLine, setCurrentLine] = useState(0);

  const refRender = useRef<HTMLDivElement>(null);

  const renderToMarkdown = (
    refRender: React.RefObject<HTMLDivElement>,
    markdown: string
  ) => {
    const markdownParsed = marked.parse(markdown);
    // @ts-ignore
    refRender.current.innerHTML = markdownParsed;
    setMarkdown(markdown as string);
  };

  const changeEditor = (
    refRender: React.RefObject<HTMLDivElement>,
    value: string | undefined,
    event?: any
  ) => {
    renderToMarkdown(refRender, value as string);

    document.querySelectorAll("pre code").forEach((el) => {
      // @ts-ignore
      hljs.highlightElement(el);
    });

    // GET LINE CURRENT IN EDITOR
    if (event !== undefined) {
      setCurrentLine(event.changes[0].range.startLineNumber);
    }
  };

  return (
    <Context.Provider
      value={{
        Markdown,
        setMarkdown,
        CurrentLine,
        setCurrentLine,
        changeEditor,
        renderToMarkdown,
        refRender,
      }}
    >
      {children}
    </Context.Provider>
  );
}

export default Context;
