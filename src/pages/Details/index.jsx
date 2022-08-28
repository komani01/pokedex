import React, { useContext } from 'react';
import { ArrowLeftCircle } from 'react-feather';
import { Link } from 'react-router-dom';
import { PkmContext } from '../../context/pkmContext';
import Logo from '../../assets/logo.svg';
import { BaseStats } from '../../components/BaseStats';
import './style.css';
import { Types } from '../../components/types';
export const PokemonDetails = () => {
	const { pokemonDetails } = useContext(PkmContext);
	return (
		pokemonDetails !== undefined && (
			<div className='details-container'>
				<section className='first-details'>
					<Link to='/gen'>
						<ArrowLeftCircle size={30}></ArrowLeftCircle>
					</Link>
					<h1>
						<span>#{pokemonDetails.id.toString().padStart(0, 3)}</span>
						{`${pokemonDetails.name}`.replace(
							pokemonDetails.name[0],
							`${pokemonDetails.name[0]}`.toLocaleUpperCase(),
						)}
					</h1>

					<section className='image-container'>
						<img src={pokemonDetails.image} alt={pokemonDetails.name} />
					</section>
				</section>
				<section className='second-details'>
					<img src={Logo} alt='Logo' />
					<section className='base-stats'>
						<h2 className='details-title'>Base-Stats</h2>
						<BaseStats pokemonDetails={pokemonDetails}></BaseStats>
					</section>
					<section className='hei-wei-types'>
						<div className='hei-wei'>
							<div className='details-title'>
								Height: <span>{pokemonDetails.height / 10} M</span>
							</div>
							<div className='details-title'>
								Weight: <span>{pokemonDetails.weight / 10} Kg</span>
							</div>
						</div>
						<div className='types'>
							<Types pokemonTypes={pokemonDetails.types} />
						</div>
					</section>
					<section className='sprites'>
						<div>
							<img
								src={pokemonDetails.sprites.front_default}
								alt={`${pokemonDetails.name} default`}
							/>
						</div>
						<div>
							<img
								src={pokemonDetails.sprites.back_default}
								alt={`${pokemonDetails.name} back`}
							/>
						</div>
						<div>
							<img
								src={pokemonDetails.sprites.front_shiny}
								alt={`${pokemonDetails.name} shiny`}
							/>
						</div>
					</section>
				</section>
			</div>
		)
	);
};
