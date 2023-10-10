export interface PasswordLengthProps {
	currentPasswordLength: number,
	onChangePasswordLength: any
}
function PasswordLength({
	currentPasswordLength,
	onChangePasswordLength
}:PasswordLengthProps) {
	return(
		<div className="password-length mb-5">
			<div className="password-length-details">
				<h2 className="mb-2.5">
					<label className="title">Password Length</label>
				</h2>
				<span className="password-length-number">{currentPasswordLength}</span>
			</div>
		<input 
				type="range"
				min="1"
				max="30"
				step="1" 
				value={currentPasswordLength}
				onChange={(event) => onChangePasswordLength(event.target.value) }
			/>
		</div>
	);
};

export default PasswordLength;