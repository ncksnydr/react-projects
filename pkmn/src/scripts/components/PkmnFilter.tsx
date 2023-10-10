/**
 *    Packages
 * -------------------------------------------------- */
import { PkmnFilterParams } from "../Types";
import { convertToTitleCase } from "../utilities/stringHelpers";

function PkmnFilter({
	isLoading,
	pkmnTypes, 
	currentPkmnType,
	onPkmnTypeChange,
	currentPkmnSearchQuery,
	onPkmnSearchQueryChange,
	currentPkmnSort,
	onPkmnSortChange }: PkmnFilterParams) {

	return (
		<div className="pkmn-search-options grid lg:grid-cols-12 lg:gap-6">
			<div className="pkmn-search-option col-span-5 pkmn-search-bar">
				<input
					type="text"
					placeholder="Search by name"
					value={currentPkmnSearchQuery}
					onChange={onPkmnSearchQueryChange}
				/>
			</div>

			<div className="pkmn-search-option col-span-4 pkmn-filter-types">
				<label htmlFor="pkmnFilter">Filter by types:</label>
				<select
					id="pkmnFilter"
					onChange={onPkmnTypeChange}
					value={currentPkmnType}
				>
					<option value="">All</option>
					{
						isLoading ? '' :
						pkmnTypes.map((type:string, index:number) => {
							return (
								<option key={index} value={type}>{convertToTitleCase(type)}</option>
							);
						})
					
					}
				</select>
			</div>

			<div className="pkmn-search-option pkmn-sort-by col-span-3">
				<label htmlFor="pkmnSort">Sort by:</label>
				<select
					id="pkmnSort"
					onChange={onPkmnSortChange}
					value={currentPkmnSort}
				>
					<option value="id">ID</option>
					<option value="name">Name</option>
				</select>
			</div>
		</div>
  );
}

export default PkmnFilter;
