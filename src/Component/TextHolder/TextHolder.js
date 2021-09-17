import s from "./TextHolder.module.css";
import { TextAreaCreator } from "../../Store/store";

const TextHolder = (props) => {

  let text = props.state.text;

  let ChangeValue = (e) => {
    props.dispatch(TextAreaCreator(e.target.value));
  };

  return (
    <div className={s.main}>
      <h2 className={s.title}>Text holder</h2>
      <div className={s.main_inside}>
        <textarea
          value={text}
          onChange={ChangeValue}
          className={s.textarea}
          placeholder="Enter text"
          spellCheck="false"
        ></textarea>
      </div>
    </div>
  );
};

export default TextHolder;
