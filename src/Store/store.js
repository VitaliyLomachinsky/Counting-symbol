const CHANGE_TEXTAREA = "CHANGE_TEXTAREA";
const CLEAR = "CLEAR";
const CHANGE_GISTOGRAMMA = "CHANGE_GISTOGRAMMA";

let store = {
  _state: {
    text: "",
    data: [],
  },
  GetState() {
    return this._state;
  },

  dispatch(action) {
    if (action.type == CHANGE_TEXTAREA) {
      this._state.text = action.text;
      CountingLogic();
    } else if (action.type == CLEAR) {
      this._state.text = "";
      this._state.data = [];
    } else if (action.type == CHANGE_GISTOGRAMMA) {
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
        store.GetState().data.push({
          symbol: split[i],
          count: 1,
          frequency: 1 / store.GetState().text.length,
        });
      }
    } else {
      debugger;
      let index = store.GetState().data.indexOf(result);
      store.GetState().data[index].count++;

      let a = store.GetState().data[index].count;
      let b = store.GetState().text.length;
      store.GetState().data[index].frequency = a / b;
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

export const ChangeGistogrammaCreator = (text) => ({
  type: CHANGE_GISTOGRAMMA,
});

export default store;
