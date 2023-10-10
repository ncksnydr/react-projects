/**
 *    Packages
 * -------------------------------------------------- */
import React, { useCallback, useEffect, useState } from 'react';
import axios from 'axios';
import { PkmnBasicResults, PkmnBasicResultsObject, PkmnSpecies, PkmnType } from './Types';

/**
 *    Components
 * -------------------------------------------------- */
import PkmnFilter from './components/PkmnFilter';
import PkmnCard from './components/PkmnCard';

/** --- Styles ------ */
import '../styles/Pkmn.css';


function Pkmn() {

	/**
	 *    Variables
	 * -------------------------------------------------- */
	const apiUrl = "https://pokeapi.co/api/v2/pokemon/?limit=151";

	/**
	 *    States
	 * -------------------------------------------------- */
	let [pkmnData, setPkmnData] = useState([]);
	let [isLoading, setIsLoading] = useState(true);
	let [pkmnTypes, setPkmnTypes] = useState([]);
	let [filterByType, setFilterByType] = useState('');
	let [searchQuery, setSearchQuery] = useState('');
	let [sort, setSort] = useState('id');

	/**
	 *    Functions
	 * -------------------------------------------------- */

	/**
		*  callPkmn
		*  Fetches data from the PokeAPI.
	 */
	const callPkmn = useCallback(async() => {
		setIsLoading(true);
		const result = await axios.get(apiUrl);
		await getPkmn(result.data.results);
		setIsLoading(false);
	}, []);

	/**
		*  getPkmn
		*  Makes a second call to PokeAPI to fetch detailed
		*  information for each PKMN.
	 */
	const getPkmn = useCallback(async(data:PkmnBasicResults) => {
		data.map(async(item:PkmnBasicResultsObject) => {
			const result = await axios.get(item.url);
			await getPkmnTypes(result.data.types);
			setPkmnData((state:any) => {
				state = [...state, result.data];
				state.sort((a:PkmnSpecies, b:PkmnSpecies) => a.id > b.id ? 1 : -1);
				return state;
			});
		});
	}, []);

	/**
		*  getPkmnTypes
		*  Sorts and catalogs PKMN types for filtering.
	 */
	const getPkmnTypes = async(types:Array<PkmnType>) => {
		types.map(async(type:PkmnType) => {
			setPkmnTypes((state:any) => {
				if (!state.includes(type.type.name)) {
					state = [...state, type.type.name];
					state.sort((a:PkmnSpecies, b:PkmnSpecies) => a.id > b.id ? 1 :-1);
				}
				return state;
			});
		});
	};


	/**
	 *    Lifecycle
	 * -------------------------------------------------- */
	useEffect(() => {
		callPkmn();
	}, [apiUrl]);

	/**
		*  filteredPkmn
		*  Returns array of filtered PKMN based on user search
		*  and filtering options.
	 */
	const filteredPkmn = pkmnData
			.filter(
				(item:PkmnSpecies) => {
					let passFilter = false;
					item.types.map((type:PkmnType) => {
						if (filterByType === '' || filterByType === type.type.name) {
							passFilter = true
						}
						return passFilter;
					});
					return passFilter;
				} 
			)
			.filter((item:PkmnSpecies) => {
				let passFilter = false;
				if (searchQuery === '' || item.name.includes(searchQuery)) {
					passFilter = true;
				}
				return passFilter;
			})
			.sort((a,b) => {
				let order = 1;
				return (
					a[sort] < b[sort] ? -1 * order : 1 * order
				)
			});


  return (
		<>
			<main className={`pkmn ${(isLoading) ? 'is-loading': 'not-loading'}`}>
				<header className="pkmn-header">
					<h1 className="text-center mb-4">Pok&eacute;Dex</h1>
					<PkmnFilter 
						isLoading={isLoading}
						pkmnTypes={pkmnTypes}
						currentPkmnType={filterByType}
						onPkmnTypeChange={(event:React.ChangeEvent<HTMLInputElement>) => setFilterByType(event.target.value)}
						currentPkmnSearchQuery={searchQuery}
						onPkmnSearchQueryChange={(event:React.ChangeEvent<HTMLInputElement>) => setSearchQuery(event.target.value)}
						currentPkmnSort={sort}
						onPkmnSortChange={(event:React.ChangeEvent<HTMLSelectElement>) => setSort(event.target.value)}
					/>
				</header>

				<section className="pkmn-cards px-8 mt-12 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-8">
					<PkmnCard 
						isLoading={isLoading} 
						pkmn={filteredPkmn} 
					/> 
				</section>
			</main>
		</>
  );
}

export default Pkmn;
