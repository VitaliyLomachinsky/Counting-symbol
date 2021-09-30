import "./App.css";
import TextHolder from "./Component/TextHolder/TextHolder";
import Options from "./Component/Options/Options";
import Result from "./Component/Result/Result";
import Gistogramma from "./Component/Gistogramma/Gistogramma";

function App(props) {
  return (
    <div className="App">
      <div className="App_inside">
        <div className="App_wrapper">
          <TextHolder state={props.state} dispatch={props.dispatch} />
          <Options dispatch={props.dispatch} />
          <Gistogramma state={props.state} dispatch={props.dispatch} />
          <Result state={props.state} />
        </div>
      </div>
      <span className="author">@Vitaliy Lomachinsky PI-321</span>
    </div>
  );
}

export default App;
