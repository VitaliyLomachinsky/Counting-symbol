import s from "./ResultItem.module.css";

const ResultItem = (props) => {
  return (
    <div className={s.item}>
      <span>
        <span className={s.letter}>{props.letter}</span> - {props.count},
      </span>
    </div>
  );
};

export default ResultItem;
