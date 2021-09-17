const CHANGE_TEXTAREA = "CHANGE_TEXTAREA";
const CLEAR = "CLEAR";

let store = {
  _state: {
    text: "",
    data: [],
  },
  GetState() {
    return this._state;
  },
  
  dispatch(action) {
    debugger;
    if ((action.type == CHANGE_TEXTAREA)) {
      this._state.text = action.text;
      CountingLogic();
    } else if ((action.type == CLEAR)) {
      this._state.text = "";
      this._state.data = [];
    }

    
    this.RerenderAll(this._state);
  },

  subscriber(observer) {
    this.RerenderAll = observer;
  },
  RerenderAll() {},
};

function CountingLogic() {
  var split = store.GetState().text.split("");
  store.GetState().data = [];

  for (let i = 0; i < split.length; i++) {
    let result = store.GetState().data.find((temp) => temp.symbol === split[i]);

    if (result == undefined) {
      if (split[i] != " " && split[i] != "\n") {
        store.GetState().data.push({ symbol: split[i], count: 1 });
      }
    } else {
      let index = store.GetState().data.indexOf(result);
      store.GetState().data[index].count++;
    }
  }
  store.GetState().data.sort(compare);
}

function compare(a, b) {
  if (a.count < b.count) {
    return 1;
  }
  if (a.count > b.count) {
    return -1;
  }
  return 0;
}

export const TextAreaCreator = (text) => ({
  type: CHANGE_TEXTAREA,
  text: text,
});

export const ClearCreator = (text) => ({
  type: CLEAR,
});

export default store;
