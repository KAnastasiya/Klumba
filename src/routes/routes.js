import App from '../containers/App';
import { Classic, HatBox, Vase, MillionRoses } from '../pages';

const routes = (
  <ReactRouter.Route path='/' component={App}>
    <ReactRouter.IndexRoute component={Classic} />
    <ReactRouter.Route path='hat-box' component={HatBox} />
    <ReactRouter.Route path='vase' component={Vase} />
    <ReactRouter.Route path='million-roses' component={MillionRoses} />
    <ReactRouter.Route path='vase' component={Vase} />
  </ReactRouter.Route>
);

export default routes;
