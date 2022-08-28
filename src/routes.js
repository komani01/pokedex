import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { PokemonDetails } from './pages/Details';
import { Generations } from './pages/Generations';
import { Home } from './pages/Home';
import { PokemonList } from './pages/PokemonList';
export const Router = () => {
	return (
		<BrowserRouter>
			<Routes>
				<Route path='/' index element={<Home />} />
				<Route path='/gens' index element={<Generations />} />
				<Route path='/gen' index element={<PokemonList />} />
				<Route path='/pokemon/details' index element={<PokemonDetails />} />
			</Routes>
		</BrowserRouter>
	);
};
