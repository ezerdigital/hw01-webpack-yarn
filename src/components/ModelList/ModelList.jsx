import { MODELS } from "../../api/models";
import s from "./ModelList.module.css";

function ModelList(props) {
  return (
    <div className={s.container}>
      {MODELS.map((m, i) => (
        <div
          className={s.item}
          onMouseEnter={() => {
            props.stateHover(i);
            props.stateClickOn(false);
          }}
          onMouseLeave={() => {
            props.stateHover(-1);
            props.stateClickOn(false);
          }}
          onClick={() => {
            props.stateClickOn(true);
          }}
          key={m.model}
        >
          <p>{m.model}</p>
        </div>
      ))}
    </div>
  );
}

export default ModelList;
