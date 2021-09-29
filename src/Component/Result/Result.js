import s from "./Result.module.css";
import ResultItem from "./ResultItem/ResultItem.js";

const Result = (props) => {

  let ItemData = props.state.data.map((item) =>(
    <ResultItem letter={item.symbol} count={item.count}/>
  ));
  debugger;
  return (
    <div className={s.main}>
      <h2 className={s.title}>Result</h2>
      <div className={s.AllItem}>
        {ItemData}
      </div>
    </div>
  );
};

export default Result;
