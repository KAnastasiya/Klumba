import routes from './routes/routes';
import configureStore from './store/configureStore';

const store = configureStore();

ReactDOM.render(
  <ReactRedux.Provider store={store}>
    <ReactRouter.Router history={ReactRouter.browserHistory} routes={routes} />
  </ReactRedux.Provider>,
  document.querySelector('.app'),
);
