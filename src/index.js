import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import PkmProvider from './context/pkmContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<React.StrictMode>
		<PkmProvider>
			<App />
		</PkmProvider>
	</React.StrictMode>,
);
