import { Bar } from "react-chartjs-2";
import s from "./BarChart.module.css";

const BarChart = (props) => {
  let NewCountArray = [];
  let NewLabelArray = [];
  let NewFrequencyArray = [];
  let Count = props.state.text.length;
  debugger;
  if (props.state.data != undefined) {
    for (let i = 0; i < props.state.data.length; i++) {
      NewCountArray.push(props.state.data[i].count);
      NewLabelArray.push(props.state.data[i].symbol);
      NewFrequencyArray.push(props.state.data[i].frequency * 100 );
    }
  }

  return (
    <div>
      <Bar
        height={200}
        width={600}
        data={{
          labels: NewLabelArray,
          datasets: [
            {
              label: "data",
              data: NewFrequencyArray,
              backgroundColor: "#ED6047",
            },
          ],
        }}
      />
      <h2 className={s.text}>
        P.min({NewLabelArray[NewLabelArray.length - 1]})=
        {NewCountArray[NewLabelArray.length - 1] / Count}
      </h2>
      <h2 className={s.text}>
        P.max({NewLabelArray[0]})={NewCountArray[0] / Count}
      </h2>
    </div>
  );
};

export default BarChart;
