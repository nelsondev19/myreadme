import { Dispatch, SetStateAction } from "react";

export type SubMenuContextType = {
  ShowMenu: boolean;
  setShowMenu: Dispatch<SetStateAction<boolean>>;
};
