import Route from './Routes';

export const routes = [
	{
		component: Route.Home,
		path: '/',
		exact: true
	},
	{
		component: Route.About,
		path: '/about',
		// routes: [{
		// 	component: NestedRoute,
		// 	path: '/about/nested'
		// }],
	}

  /* ... other routes */
];
