import "./submenu.css";
import { useContext } from "react";
import { options } from "../../templates";

// CONTEXT
import SubMenuContext from "../../context/SubMenu";
import { SubMenuContextType } from "../../context/SubMenu/types";

import EditorContext from "../../context/Editor";
import { EditorContextType } from "../../context/Editor/types";
function SubMenu(): JSX.Element {
  const { ShowMenu } = useContext(SubMenuContext) as SubMenuContextType;

  const { CurrentLine, Markdown, changeEditor, refRender } = useContext(
    EditorContext
  ) as EditorContextType;

  // SET TEMPLATE IN CURRENT LINE OF EDITOR
  const setTemplate = (template: string) => {
    const text = Markdown.split("\n");
    text[CurrentLine] = template;

    text.join("\n");
    changeEditor(refRender, text.join("\n"));
  };
  if (ShowMenu) {
    return (
      <div className="submenu-box bg-menu">
        <div className="scroll-sub-menu">
          <p className="text-info">
            Click on a section below to add it to your README file
          </p>
          {options.map((option) => (
            <div
              onClick={() => setTemplate(option.value)}
              key={option.title}
              className="card-option"
            >
              {option.title}
            </div>
          ))}
        </div>
      </div>
    );
  }

  return <></>;
}

export default SubMenu;
