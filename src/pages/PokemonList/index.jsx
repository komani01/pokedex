import React, { useContext, useState } from 'react';
import { PkmContext } from '../../context/pkmContext';
import { ArrowLeftCircle, Search } from 'react-feather';
import { Link } from 'react-router-dom';
import Logo from '../../assets/logo.svg';
import { PokemonCard } from '../../components/PokemonCard';
import './style.css';
export const PokemonList = () => {
	const [search, setSearch] = useState('');
	const [filteredList, setfilteredList] = useState([]);
	const { pokemonList } = useContext(PkmContext);
	const handleSearch = (input) => {
		setfilteredList(
			pokemonList.filter((p) => p.name.toString().includes(input)),
		);
	};
	return (
		<div className='list-container'>
			<header className='header'>
				<Link to='/gens'>
					<ArrowLeftCircle size={50}></ArrowLeftCircle>
				</Link>
				<img src={Logo} alt='Logo' />
				<div className='input-container'>
					<input
						type='text'
						value={search}
						placeholder='Pokemon?'
						onChange={(e) => {
							setSearch(e.target.value);
							handleSearch(e.target.value);
						}}
					/>
					<button>
						<Search size={25} />
					</button>
				</div>
			</header>
			<main className='pokemon-list'>
				{search === '' ? (
					<PokemonCard
						pokemonList={pokemonList !== undefined ? pokemonList : null}
					/>
				) : (
					<PokemonCard
						pokemonList={filteredList !== undefined ? filteredList : null}
					/>
				)}
			</main>
		</div>
	);
};
