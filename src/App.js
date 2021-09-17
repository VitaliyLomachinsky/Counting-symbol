import "./App.css";
import TextHolder from "./Component/TextHolder/TextHolder";
import Options from "./Component/Options/Options";
import Result from "./Component/Result/Result";

function App() {
  return (
    <div className="App">
      <div className="App_inside">
        <div className="App_wrapper">
          <TextHolder />
          <Options />
          <Result />
        </div>
      </div>
    </div>
  );
}

export default App;
