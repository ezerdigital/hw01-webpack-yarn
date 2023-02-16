import { MODELS } from "../../api/models";
import s from "./DataSheet.module.css";

function DataSheet(props) {
  let engine = "",
    displacement = "",
    torque = "",
    gearbox = "",
    traction = "";
  if (props.clickOn) {
    engine = MODELS[props.index].datasheet.engine;
    displacement = MODELS[props.index].datasheet.displacement;
    torque = MODELS[props.index].datasheet.torque;
    gearbox = MODELS[props.index].datasheet.gearbox;
    traction = MODELS[props.index].datasheet.traction;
  }
  return (
    <div className={s.container}>
      <h4>Motor:</h4>
      <p>{engine}</p>
      <h4>Cilindrada:</h4>
      <p>{displacement}</p>
      <h4>Torque:</h4>
      <p>{torque}</p>
      <h4>Caja de cambio:</h4>
      <p>{gearbox}</p>
      <h4>tracción:</h4>
      <p>{traction}</p>
    </div>
  );
}

export default DataSheet;
