import { useState } from "react";

interface PasswordIndicatorProps {
	currentPasswordLength: number,
	currentPasswordStrength: string
}

function PasswordIndicator({ currentPasswordLength, currentPasswordStrength }:PasswordIndicatorProps) {
	return(
	<>
		<div className={`password-indicator ${currentPasswordStrength} mt-4 mb-6`}></div>
	</>
	);
};

export default PasswordIndicator;