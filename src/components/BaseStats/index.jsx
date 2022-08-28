import React, { useContext } from 'react';
import './style.css';
export const BaseStats = ({ pokemonDetails }) => {
	console.log({ pokemonDetails });
	const handleCalcStat = (index) => {
		const stat = pokemonDetails.stats[index].base_stat;
		const porcentStats = (stat * 100) / 255;
		return porcentStats;
	};

	return (
		<section className='status'>
			<div>
				<section>
					<span>HP:</span>
					<div className='tooltip'>
						<div style={{ width: `${handleCalcStat(0)}%` }} />
						<span className='tooltiptext'>
							{pokemonDetails.stats[0].base_stat}
						</span>
					</div>
				</section>
				<section>
					<span>SP-ATK:</span>
					<div className='tooltip'>
						<div style={{ width: `${handleCalcStat(3)}%` }} />
						<span className='tooltiptext'>
							{pokemonDetails.stats[3].base_stat}
						</span>
					</div>
				</section>
			</div>

			<div>
				<section>
					<span>ATK:</span>
					<div className='tooltip'>
						<div style={{ width: `${handleCalcStat(1)}%` }} />
						<span className='tooltiptext'>
							{pokemonDetails.stats[1].base_stat}
						</span>
					</div>
				</section>
				<section>
					<span>SP-DEF:</span>
					<div className='tooltip'>
						<div style={{ width: `${handleCalcStat(4)}%` }} />
						<span className='tooltiptext'>
							{pokemonDetails.stats[4].base_stat}
						</span>
					</div>
				</section>
			</div>
			<div>
				<section>
					<span>DEF:</span>
					<div className='tooltip'>
						<div style={{ width: `${handleCalcStat(2)}%` }} />
						<span className='tooltiptext'>
							{pokemonDetails.stats[2].base_stat}
						</span>
					</div>
				</section>
				<section>
					<span>SPD: </span>
					<div className='tooltip'>
						<div style={{ width: `${handleCalcStat(5)}%` }} />
						<span className='tooltiptext'>
							{pokemonDetails.stats[5].base_stat}
						</span>
					</div>
				</section>
			</div>
		</section>
	);
};
