const createSlice = require('@reduxjs/toolkit').createSlice;

const initialState = {
  numOfIcecream: 20,
};

const icecreamSlice = createSlice({
  name: 'icecream',
  initialState,
  reducers: {
    order: state => {
      state.numOfIcecream--;
    },
    restock: (state, action) => {
      state.numOfIcecream += action.payload;
    },
  },
});

module.exports = icecreamSlice.reducer;
module.exports.icecreamActions = icecreamSlice.actions;
