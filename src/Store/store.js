const CHANGE_TEXTAREA = "CHANGE_TEXTAREA";

let store = {
  _state: {
    text: "",
    data: [],
  },
  GetState() {
    return this._state;
  },

  dispatch(action) {
    if ((action.type = CHANGE_TEXTAREA)) {
      //change
      this._state.text = action.text;
    }
    CountingLogic();
    console.log(this._state.data);
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

export default store;
