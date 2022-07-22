import { useEffect, useContext } from "react";
import Editor, { Monaco } from "@monaco-editor/react";
import hljs from "highlight.js";

// CONTEXT
import SubMenuContext from "../../context/SubMenu";
import { SubMenuContextType } from "../../context/SubMenu/types";

import EditorContext from "../../context/Editor";
import { EditorContextType } from "../../context/Editor/types";

function Home() {
  const { ShowMenu } = useContext(SubMenuContext) as SubMenuContextType;

  const { Markdown, changeEditor, refRender } = useContext(
    EditorContext
  ) as EditorContextType;

  // @ts-ignore
  hljs.addPlugin(new CopyButtonPlugin());

  useEffect(() => {
    changeEditor(refRender, Markdown);
  }, []);

  const onmounttest = (_: any, monaco: Monaco) => {
    monaco.editor.defineTheme("vs-dark", {
      base: "vs-dark",
      inherit: true,
      rules: [],
      colors: {
        "editor.background": "#000000",
      },
    });
  };

  return (
    <>
      <section
        className="content"
        style={{
          marginLeft: ShowMenu ? "17rem" : "4rem",
        }}
      >
        <Editor
          options={{
            minimap: {
              enabled: false,
            },
          }}
          height="93vh"
          width={"50%"}
          theme="vs-dark"
          defaultLanguage="markdown"
          value={Markdown}
          onChange={(value, ev) => changeEditor(refRender, value, ev)}
          onMount={onmounttest}
        />
        <div ref={refRender} className="rendered-html" id="html" />
      </section>
    </>
  );
}

export default Home;
