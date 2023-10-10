/**
 * --------------------------------------------------------------------------
 *   Pokémon Types and Interfaces
 * --------------------------------------------------------------------------
*/


export interface PkmnBasicResultsObject {
	name: string,
	url: string
}


export type PkmnBasicResults = PkmnBasicResultsObject[];


export interface PkmnBasic {
	count?: number,
	next?: any,
	previous?: any,
	results: Array<PkmnBasicResults>
}


export interface PkmnSprites {
	back_default: string,
	back_female: string,
	back_shiny: string,
	back_shiny_female: string,
	front_default: string,
	front_female: string,
	front_shiny: string,
	front_shiny_female: string,
	other?: any
}

export interface PkmnType {
	slot: number,
	type: {
		name: string,
		url: string
	}
}

export interface PkmnTypesSorted {
	id?: number,
	type: string
}


export interface PkmnSpecies {
	abilities?: Array<any>,
	base_experience?: number,
	forms?: Array<any>,
	game_indices?: Array<any>,
	height: number,
	held_items?: Array<any>,
	id: number,
	is_default?: boolean,
		location_area_encounters?: string,
	moves?: Array<any>,
	name: string,
	order?: number,
	past_types?: Array<any>,
	species?: PkmnBasicResultsObject,
	sprites: PkmnSprites,
	stats?: Array<any>,
	types: Array<PkmnType>,
	weight: number
}

export interface LoadingOverlayParams {
	isLoading: boolean
}

export interface PkmnFilterParams {
	isLoading: boolean,
	pkmnTypes: Array<string>, 
	currentPkmnType: string,
	onPkmnTypeChange: any,
	currentPkmnSearchQuery: string,
	onPkmnSearchQueryChange: any,
	currentPkmnSort: string
	onPkmnSortChange: any
}

export interface PkmnCardParams {
	isLoading: boolean,
	pkmn: Array<PkmnSpecies>
}