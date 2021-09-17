import "./App.css";
import TextHolder from "./Component/TextHolder/TextHolder";
import Options from "./Component/Options/Options";
import Result from "./Component/Result/Result";

function App(props) {
  return (
    <div className="App">
      <div className="App_inside">
        <div className="App_wrapper">
          <TextHolder state={props.state} dispatch={props.dispatch}/>
          <Options />
          <Result state={props.state}/>
        </div>
      </div>
    </div>
  );
}

export default App;
