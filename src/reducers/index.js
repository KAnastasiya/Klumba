import modal from './modal';

export default Redux.combineReducers({
  modal,
  form: ReduxForm.reducer,
});
