import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom';
import {renderRoutes} from 'react-router-config';

import * as Routes from './routes/Routes';
import {routes} from './routes/constructor';

const splitPoints = window.splitPoints || [];
Promise.all(splitPoints.map(chunk => Routes[chunk].loadComponent()))
.then(() => {
  const mountNode = document.getElementById('app');
  ReactDOM.render(
    <BrowserRouter>
      {renderRoutes(routes)}
    </BrowserRouter>,
    mountNode
  );
});



// /*import React from 'react';
// import {
//   BrowserRouter as Router,
//   Route,
// 	Switch,
//   Link,
// 	NavLink,
// } from 'react-router-dom';
// import CSSTransitionGroup from 'react-transition-group/CSSTransitionGroup';
// import { onRouteChange } from './core/functions';

// import Home from './components/Home';
// import About from './components/About';
// import NoMatch from './components/NoMatch';

// import Layout from './layouts/Base';

// export default class AppRoutes extends React.Component {
// 	render() {
// 		return (
// 		<Router>
// 			{
// 				({ location }) => <Layout location={location} />
// 			}
// 		</Router>
// 		);
// 	}
// 	/*render() {
// 		return (
// 		<Router>
// 			<div>
// 				<ul>
// 					<li><NavLink to="/">Home</NavLink></li>
// 					<li><NavLink to="/about">About</NavLink></li>
// 				</ul>

// 				<hr/>
// 				<Switch>
// 					<Route exact path="/" component={Home}/>
// 					<Route path="/about" component={About}/>
// 					<Route component={NoMatch}/>
// 				</Switch>
// 			</div>
// 		</Router>
// 		);
// 	}*/
// }*/
