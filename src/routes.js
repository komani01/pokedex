import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Home from './pages/Home/Home';
import Details from './pages/Details/Details';

function Routes() {
	return (
		<div className='app'>
			<BrowserRouter>
				<Switch>
					<Route path='/:query?' render={(props) => <Home {...props} />} />
					<Route
						path='/details/:name?'
						render={(props) => <Details {...props} />}
					/>
				</Switch>
			</BrowserRouter>
		</div>
	);
}

export default Routes;
