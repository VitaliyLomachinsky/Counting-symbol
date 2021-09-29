import { Bar } from "react-chartjs-2";

const BarChart = (props) => {
  debugger;
  let NewCountArray = [];
  let NewLabelArray = [];

  if (props.state.data != undefined) {
    for (let i = 0; i < props.state.data.length; i++) {
      NewCountArray.push(props.state.data[i].count);
      NewLabelArray.push(props.state.data[i].symbol);
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
              data: NewCountArray,
              backgroundColor: "#ED6047",
            },
          ],
        }}
      />
    </div>
  );
};

export default BarChart;
