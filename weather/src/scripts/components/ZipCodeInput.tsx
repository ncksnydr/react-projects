/**
 *    Packages & Utilities
 * -------------------------------------------------- */
import { useState } from "react";
import { ZipCodeInputProps } from "../Types";
import { FaMagnifyingGlass } from "react-icons/fa6";

function ZipCodeInput({ currentZipCode, onUpdateZipCode }:ZipCodeInputProps) {
	
	/**
	 *    States
	 * -------------------------------------------------- */
	const [zipCodeInput, setZipCodeInput] = useState(currentZipCode);
	const [hasInputError, setHasInputError] = useState(false);


	/**
	 *    Functions
	 * -------------------------------------------------- */

	/**
		*  validateZipCode
		*  Checks to ensure ZIP code is five digits. If validation
	  *  passes, the ZIP code state is updated. If validation fails
	  *  an error state is set on the input.
	 */
	const validateZipCode = (zipCodeInput:string) => {
		if (zipCodeInput.match(/\d{5}/)) {
			setHasInputError(false);
			onUpdateZipCode(zipCodeInput);
			return;
		}
		setHasInputError(true);
	};

	return(
		<div className="weather-location-search mb-4">
			<input 
				id="zipCodeField"
				type="text"
				className={`mr-3 ${(hasInputError) ? 'has-error' : ''}`}
				onChange={(event) => { setZipCodeInput(event.target.value )} }
				value={zipCodeInput}
				placeholder="90210"
				maxLength={5}
			/>
			<button 
				className={`primary-btn`}
				onClick={() => validateZipCode(zipCodeInput)}
			>
			<FaMagnifyingGlass />
			</button>

			{
				hasInputError &&
				<div className="has-error error-message">
					<small>Please enter a valid ZIP code.</small>
				</div>
			}
		</div>
	);
}

export default ZipCodeInput;
