import { useCallback, useState } from "react";
import Background from "../components/Background";
import Drawer from "../components/Drawer";
import MainAppContent from "../AppBody";

function App() {
  const [drawerExpanded, setDrawerExpanded] = useState(
    () => window.innerWidth > 1920
  );

  const openDrawer = useCallback(() => setDrawerExpanded(true), []);

  const closeDrawer = useCallback(() => setDrawerExpanded(false), []);

  return (
    <Background drawerExpanded={drawerExpanded}>
      <Drawer
        expanded={drawerExpanded}
        onOpen={openDrawer}
        onClose={closeDrawer}
      />
      <MainAppContent drawerExpanded={drawerExpanded} />
    </Background>
  );
}

export default App;
