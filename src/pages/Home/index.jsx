import React from 'react';
import { Link } from 'react-router-dom';

import Logo from '../../assets/logo.svg';
import PokeBall from '../../assets/pokeball.svg';
import Rayquaza from '../../assets/rayquaza.svg';
import './style.css';
import { Instagram, GitHub, Facebook } from 'react-feather';
export const Home = () => {
	return (
		<div className='home-container'>
			<section className='first-side'>
				<img className='logo' src={Logo} alt='Pokémon' />
				<main>
					<h1>Practicing ReactJS with Pokédex Project</h1>
					<p>
						Lorem ipsum, dolor sit amet consectetur adipisicing elit. At error
						eveniet qua!
					</p>
					<Link to='gens'>
						Go to HexDex
						<img src={PokeBall} alt='PokeBall icon' />
					</Link>
					<section className='links'>
						<a
							href='http://fb.com/neyuq.isme'
							target='_blank'
							title='Facebook'
							rel='noreferrer'
						>
							<Facebook size={35} />
						</a>
						<a
							href='http://github.com/komani01/pokedex'
							target='_blank'
							title='GitHub'
							rel='noreferrer'
						>
							<GitHub size={35} />
						</a>
						<a
							href='http://instagram.com/neyuqisme'
							target='_blank'
							title='Instagram'
							rel='noreferrer'
						>
							<Instagram size={35} />
						</a>
					</section>
				</main>
			</section>
			<section className='second-side'>
				<img src={Rayquaza} alt='RayzaquaImg' />
			</section>
		</div>
	);
};
