import react from "react";
import RoutePath from "./RoutePath";
import { DataProvider } from "./DataContext";

function App() {
  return (
    <>
      <DataProvider>
        <RoutePath />
      </DataProvider>
    </>
  );
}

export default App;
