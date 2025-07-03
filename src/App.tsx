import React, { createContext, useState } from "react";
import "./App.css";
import "./index.css";
import "@arcgis/map-components/dist/components/arcgis-map";
import "@arcgis/map-components/components/arcgis-map";
import "@arcgis/map-components/components/arcgis-zoom";
import "@arcgis/map-components/components/arcgis-legend";
import "@esri/calcite-components/dist/components/calcite-shell";
import "@esri/calcite-components/dist/calcite/calcite.css";
import { CalciteShell } from "@esri/calcite-components-react";
import MapDisplay from "./components/MapDisplay";
import ActionPanel from "./components/ActionPanel";
import Header from "./components/Header";
import UndergroundSwitch from "./components/UndergroundSwitch";
import Chart from "./components/Chart";
import { contractPackage } from "./Query";

type MyDropdownContextType = {
  contractpackages: any;
  updateContractPackage: any;
};

const initialState = {
  contractpackages: undefined,
  updateContractPackage: undefined,
};

export const MyContext = createContext<MyDropdownContextType>({
  ...initialState,
});

function App() {
  const [contractpackages, setContractpackages] = useState<any>(
    contractPackage[0]
  );

  const updateContractPackage = (newContractpackage: any) => {
    setContractpackages(newContractpackage);
  };
  return (
    <div>
      <CalciteShell>
        <MyContext value={{ contractpackages, updateContractPackage }}>
          <ActionPanel />
          <UndergroundSwitch />
          <MapDisplay />
          <Chart />
          <Header />
        </MyContext>
      </CalciteShell>
    </div>
  );
}

export default App;
