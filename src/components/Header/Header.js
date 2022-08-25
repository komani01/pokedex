import React from 'react';
import { Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import './header.css';
import logo from '../../assets/img/logo.png';

const Header = () => {
	return (
		<div className='container-header mb-5'>
			<Container fluid>
				<div className='text-center'>
					<Link to='/'>
						<img title='Go to home' alt='Go to home' src={logo} />
					</Link>
				</div>
			</Container>
		</div>
	);
};
export default Header;
