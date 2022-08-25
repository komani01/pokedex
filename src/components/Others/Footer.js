import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

import './style.css';

const Footer = () => {
	return (
		<footer className='mt-5'>
			<div className='d-flex justify-content-center align-items-center'>
				<p className='mr-1 credits-text'>Developed by &nbsp;</p>
				<a
					className='mhq'
					target='_blank'
					href='https://github.com/komani01'
					rel='noreferrer'
				>
					neyuQisme
				</a>
			</div>
			<a
				className='view-code'
				target='_blank'
				href='https://github.com/komani01/pokedex'
				rel='noreferrer'
			>
				View code on Github&nbsp;
				<FontAwesomeIcon className='ml-2' icon={faGithub} />
			</a>
		</footer>
	);
};

export default Footer;
