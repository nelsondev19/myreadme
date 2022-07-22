import "./index.css";
import Menu from "./components/Menu";
import SubMenu from "./components/SubMenu";
import { SubMenuProvider } from "./context/SubMenu";
import Home from "./routes/Home";
import { EditorProvider } from "./context/Editor";
import Navbar from "./components/Navbar";

function App() {
  return (
    <>
      <EditorProvider>
        <SubMenuProvider>
          <Navbar />
          <Menu />
          <SubMenu />
          <Home />
        </SubMenuProvider>
      </EditorProvider>
    </>
  );
}
export default App;
