/**
	*  convertToTitleCase
	*  Converts string to titlecase (e.g. foobar → Foobar).
 */
export const convertToTitleCase = (str:string) => {
	return str.charAt(0).toUpperCase() + str.slice(1);
};
