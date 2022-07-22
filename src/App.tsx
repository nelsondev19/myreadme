import { Suspense, lazy } from "react";
import "./index.css";
import { SubMenuProvider } from "./context/SubMenu";
import { EditorProvider } from "./context/Editor";

const Navbar = lazy(() => import("./components/Navbar"));
const Menu = lazy(() => import("./components/Menu"));
const Home = lazy(() => import("./routes/Home"));
const SubMenu = lazy(() => import("./components/SubMenu"));

function App() {
  return (
    <>
      <EditorProvider>
        <SubMenuProvider>
          <Suspense fallback={<div>Loading...</div>}>
            <Navbar />
          </Suspense>
          <Menu />
          <Suspense fallback={<div>Loading...</div>}>
            <SubMenu />
          </Suspense>
          <Suspense fallback={<div>Loading...</div>}>
            <Home />
          </Suspense>
        </SubMenuProvider>
      </EditorProvider>
    </>
  );
}
export default App;
