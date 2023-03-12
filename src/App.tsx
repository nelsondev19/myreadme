import { Suspense, lazy } from "react";
import { SubMenuProvider } from "./context/SubMenu";
import { EditorProvider } from "./context/Editor";
import IsMobile from "./components/IsMobile";

const Navbar = lazy(() => import("./components/Navbar"));
const Menu = lazy(() => import("./components/Menu"));
const Home = lazy(() => import("./routes/Home"));   
const SubMenu = lazy(() => import("./components/SubMenu"));

function App() {
  const isMobile = navigator.userAgent.includes("Mobile");

  if (isMobile) return <IsMobile />;
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
