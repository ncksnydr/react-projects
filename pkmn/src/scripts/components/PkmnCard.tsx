/**
 *    Packages
 * -------------------------------------------------- */
import { PkmnCardParams, PkmnType } from "../Types";
import { convertToTitleCase } from "../utilities/stringHelpers";

function PkmnCard({ isLoading, pkmn }: PkmnCardParams) {
  return (
		<>
			{
				!isLoading &&
					pkmn.map((species) => {
						return (
							<>
								<article className={`pkmn-card pkmn-card-type-${species.types[0].type.name}`}>
									<img 
										className="pkmn-card-image"
										src={species.sprites.front_default} 
										alt={`${convertToTitleCase(species.name)} sprite`} 
									/>
									<span className="pkmn-card-id text-center block">
										#{String(species.id).padStart(3, '0')}
									</span>
									<h1 className="pkmn-card-title text-center">{convertToTitleCase(species.name)}</h1>
									<ul className="pkmn-card-types">
										{
											species.types.map((type:PkmnType) => {
												return(<li>{convertToTitleCase(type.type.name)}</li>);
											})
										}
									</ul>
								</article>
							</>
						)
					})
			}
		</>
  );
}

export default PkmnCard;
