import s from "./Result.module.css";
import ResultItem from "./ResultItem/ResultItem.js";


const Result = () => {
  return (
    <div className={s.main}>
      <h2 className={s.title}>Result</h2>
      <ResultItem/>
    </div>
  );
};

export default Result;
