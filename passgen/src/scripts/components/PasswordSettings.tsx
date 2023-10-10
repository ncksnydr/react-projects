import { useState } from "react";

export interface PasswordSettingsProps {
  includeLowercase: boolean,
	onIncludeLowercaseChange: any,
	includeUppercase: boolean,
	onIncludeUppercaseChange: any,
	includeNumbers: boolean,
	onIncludeNumbersChange: any,
	includeSymbols: boolean,
	onIncludeSymbolsChange: any
}

function PasswordSettings({
	includeLowercase,
	onIncludeLowercaseChange,
	includeUppercase,
	onIncludeUppercaseChange,
	includeNumbers,
	onIncludeNumbersChange,
	includeSymbols,
	onIncludeSymbolsChange,
}:PasswordSettingsProps) {

	

	return(
		<div className="password-settings">
			<h2 className="mb-5">
				<label className="title">Password Settings</label>
			</h2>
			<ul className="password-settings-options grid grid-rows-2 grid-flow-col mt-1.5 mb-3">
					<li className="option">
						<input 
							type="checkbox" 
							id="lowercase"
							checked={includeLowercase}
							onChange={() => onIncludeLowercaseChange(!includeLowercase) }
						/>
						<label htmlFor="lowercase">Lowercase (a-z)</label>
					</li>
					<li className="option">
						<input 
							type="checkbox" 
							id="uppercase" 
							checked={includeUppercase}
							onChange={() => onIncludeUppercaseChange(!includeUppercase) }
						/>
						<label htmlFor="uppercase">Uppercase (A-Z)</label>
					</li>
					<li className="option">
						<input 
							type="checkbox" 
							id="numbers" 
							checked={includeNumbers}
							onChange={() => onIncludeNumbersChange(!includeNumbers) }
						/>
						<label htmlFor="numbers">Numbers (0-9)</label>
					</li>
					<li className="option">
						<input 
							type="checkbox" 
							id="symbols" 
							checked={includeSymbols}
							onChange={() => onIncludeSymbolsChange(!includeSymbols) }
						/>
						<label htmlFor="symbols">Symbols (!-$^+)</label>
					</li>
			</ul>
		</div>
	);
};

export default PasswordSettings;