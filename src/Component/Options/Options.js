import s from "./Options.module.css";
import { ClearCreator } from "../../Store/store";

const Options = (props) => {
  let Clear = () => {
    props.dispatch(ClearCreator());
  }

  return (
    <div className={s.main}>
      <h2 className={s.title}>Options</h2>
      <div className={s.btns}>
        <div className={s.clear_btn}>
          <button className={s.btn} onClick={Clear}>Clear</button>
        </div>
      </div>
    </div>
  );
};

export default Options;
