import { useState } from "react";
import ModelList from "./components/ModelList/ModelList";
import ImageVehicle from "./components/ImageVehicle/ImageVehicle";
import DataSheet from "./components/Datasheet/DataSheet";
import s from "./App.module.css";

function App() {
  const [hover, setHover] = useState(-1);
  const [clickOn, setClickOn] = useState(false);

  return (
    <div>
      <h1>Jeep</h1>
      <div className={s.container}>
        <ModelList stateHover={setHover} stateClickOn={setClickOn} />
        <ImageVehicle index={hover} />
        <DataSheet clickOn={clickOn} index={hover} />
      </div>
    </div>
  );
}

export default App;
