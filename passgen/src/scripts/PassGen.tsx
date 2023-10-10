import React, { useEffect, useState } from 'react';
import { FaCopy, FaCheck } from "react-icons/fa6";
import '../styles/PassGen.css';
import PasswordIndicator from './components/PasswordIndicator';
import PasswordLength from './components/PasswordLength';
import PasswordSettings from './components/PasswordSettings';

function PassGen() {

	/**
	 *    States
	 * -------------------------------------------------- */
	let [includeLowercase, setIncludeLowercase] = useState(true);
	let [includeUppercase, setIncludeUppercase] = useState(true);
	let [includeNumbers, setIncludeNumbers] = useState(true);
	let [includeSymbols, setIncludeSymbols] = useState(false);
	let [passwordLength, setPasswordLength] = useState(15);
	let [generatedPassword, setGeneratedPassword] = useState('');
	let [copyPasswordClicked, setCopyPasswordClicked] = useState(false);
	let [passwordStrength, setPasswordStrength] = useState('weak');

	/**
	 *    Variables
	 * -------------------------------------------------- */

	const characters = {
		lowercase: "abcdefghijklmnopqrstuvwxyz",
		uppercase: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
		numbers: "0123456789",
		symbols: "!$%&|[](){}:;.,*+-#@<>~"
	};


	/**
	 *    Functions
	 * -------------------------------------------------- */

	/**
		*  copyPassword
		*  Copies generated password to the clipboard; toggles the state
		*  `copyPasswordClicked` to allow for UX-friendly icon change.
	 */
	const copyPassword = ():void => {
		setCopyPasswordClicked(true);
    navigator.clipboard.writeText(generatedPassword);
    setTimeout(() => {
			setCopyPasswordClicked(false);
    }, 1500);
	}

	/**
		*  checkPasswordStrength
		*  Checks length of password to inform the user of password strength.
	 */
	const checkPasswordStrength = ():void => {
		if (passwordLength >= 18) {
			setPasswordStrength('strong');
		} else if (passwordLength >= 9 && passwordLength <= 17) {
			setPasswordStrength('okay');
		} else {
			setPasswordStrength('weak');
		}
	}

	/**
		*  checkFormOptions
		*  Concatinates a string of possible character options based on selections
		*  made by the user in the `Password Settings` setion of the UI.
		*  @see characters
	 */
	const checkFormOptions = ():string => {
		let formOptions = '';

		if (includeLowercase) { formOptions += characters['lowercase'] };
		if (includeUppercase) { formOptions += characters['uppercase'] };
		if (includeNumbers) { formOptions += characters['numbers'] };
		if (includeSymbols) { formOptions += characters['symbols'] };

		return formOptions;
	}

	/**
		*  generatePassword
		*  Builds and sets a new password based on user preferences.
		*  @see checkFormOptions()
		*  @see checkPasswordStrength()
	 */
	const generatePassword = ():void => {
    let staticPassword = checkFormOptions();
    let randomPassword = "";

		checkPasswordStrength();

    for (let i = 0; i < passwordLength; i++) {
			let randomChar = staticPassword[Math.floor(Math.random() * staticPassword.length)];
			randomPassword += randomChar;
    }
    setGeneratedPassword(randomPassword);
	}

	/**
	 *    Lifecycle
	 * -------------------------------------------------- */
	useEffect(() => {
		generatePassword();
	}, [
		includeSymbols,
		includeNumbers,
		includeUppercase,
		includeLowercase,
		passwordLength
	]);

  return (
		<div className="passgen px-12 py-9 mt-12 mx-auto">
			<h1 className="mt-2 mb-9">Password Generator</h1>
			<div className="password-window">
				<input
					className="password-window-display"
					type="text" 
					disabled 
					value={generatedPassword}
				/>
				<button
					className={`password-btn password-btn-copy ${
						!copyPasswordClicked ? 'inactive' : 'active'
					}`} 
					onClick={() => copyPassword() }>
					{ !copyPasswordClicked && <FaCopy className="fill-slate-500" /> }
					{ copyPasswordClicked && <FaCheck className="fill-emerald-600" /> }
				</button>
			</div>
			<PasswordIndicator
				currentPasswordLength={passwordLength}
				currentPasswordStrength={passwordStrength} 
			/>
			<PasswordLength 
				currentPasswordLength={passwordLength}
				onChangePasswordLength={(passLen:number) => setPasswordLength(passLen)}
			/>
			<PasswordSettings 
				includeLowercase={includeLowercase}
				onIncludeLowercaseChange={(lowercaseChange:boolean) => setIncludeLowercase(lowercaseChange)}
				includeUppercase={includeUppercase}
				onIncludeUppercaseChange={(uppercaseChange:boolean) => setIncludeUppercase(uppercaseChange)}
				includeNumbers={includeNumbers}
				onIncludeNumbersChange={(numbersChange:boolean) => setIncludeNumbers(numbersChange)}
				includeSymbols={includeSymbols}
				onIncludeSymbolsChange={(symbolsChange:boolean) => setIncludeSymbols(symbolsChange)}
			/>
			<button
				className="primary-btn block mt-6 mb-0 mx-auto w-3/5"
				onClick={() => generatePassword() }
			>
				Generate Password
			</button>
    </div>
  );
}

export default PassGen;
