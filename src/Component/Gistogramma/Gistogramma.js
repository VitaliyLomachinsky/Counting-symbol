import s from "./Gistogramma.module.css";
import BarChart from "../BarChart/BarChart";

const Gistogramma = (props) => {
  return (
    <div className={s.main}>
      <h2 className={s.title}>Gistogramma(%)</h2>
      <BarChart state={props.state} />
    </div>
  );
};

export default Gistogramma;
