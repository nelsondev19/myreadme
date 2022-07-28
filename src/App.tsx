import { Suspense, lazy } from "react";
import { SubMenuProvider } from "./context/SubMenu";
import { EditorProvider } from "./context/Editor";

const Navbar = lazy(() => import("./components/Navbar"));
const Menu = lazy(() => import("./components/Menu"));
const Home = lazy(() => import("./routes/Home"));
const SubMenu = lazy(() => import("./components/SubMenu"));

function App() {
  const isMobile = navigator.userAgent.includes("Mobile");

  if (isMobile) {
    return (
      <div className="grid-device-mobile">
        <h1 className="title-device-mobile">¡Oh no!</h1>
        <br />
        <p className="text-device-mobile">
          This app is not compatible with your device
        </p>
      </div>
    );
  }
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
