import { MODELS } from "../../api/models";
import s from "./ImageVehicle.module.css";

function ImageVehicle(props) {
  let url = "";
  if (props.index >= 0) {
    url = MODELS[props.index].url;
  }
  return (
    <div className={s.container}>
      <img src={url} />
    </div>
  );
}

export default ImageVehicle;
