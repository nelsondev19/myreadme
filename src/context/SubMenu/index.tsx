import { createContext, useState, ReactNode } from "react";

// STATE FOR SHOW SUBMENU

const Context = createContext({});

Context.displayName = "SubMenuContext";

interface Props {
  children: ReactNode;
}
export function SubMenuProvider({ children }: Props) {
  const [ShowMenu, setShowMenu] = useState(false);

  return (
    <Context.Provider
      value={{
        ShowMenu,
        setShowMenu,
      }}
    >
      {children}
    </Context.Provider>
  );
}

export default Context;
