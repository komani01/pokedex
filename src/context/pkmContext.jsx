import React, { createContext, useEffect, useState } from 'react';
import { allDex } from '../service/api';

export const PkmContext = createContext({
	setGen: () => {},
	pokemonList: [],
	pokemonDetails: {},
	setPokemonDetails: () => {},
});

export default function PkmProvider({ children }) {
	const [gen, setGen] = useState(-1);
	const [pokemonList, setPokemonList] = useState([]);
	const [pokemonDetails, setPokemonDetails] = useState({});
	useEffect(() => {
		const buscarPKMs = async () => {
			try {
				const pkm = await allDex[gen];
				setPokemonList(pkm);
			} catch (e) {
				console.log(e);
			}
		};
		buscarPKMs();
	}, [gen]);
	return (
		<div>
			<PkmContext.Provider
				value={{
					setGen,
					pokemonList,
					pokemonDetails,
					setPokemonDetails,
				}}
			>
				{children}
			</PkmContext.Provider>
		</div>
	);
}
