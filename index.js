const store = require('./app/store');
const cakeActions = require('./features/cake/cakeSlice').cakeActions;
const icecreamActions =
  require('./features/icecream/icecreamSlice').icecreamActions;
const fetchUsers = require('./features/user/userSlice').fetchUsers;

console.log('Initial State: ', store.getState());

const unsubscribe = store.subscribe(() => {
  console.log('Updated State: ', store.getState());
});

store.dispatch(fetchUsers());

// store.dispatch(cakeActions.order());
// store.dispatch(cakeActions.order());
// store.dispatch(cakeActions.restock(3));

// store.dispatch(icecreamActions.order());
// store.dispatch(icecreamActions.order());
// store.dispatch(icecreamActions.order());
// store.dispatch(icecreamActions.restock(3));

// unsubscribe();
