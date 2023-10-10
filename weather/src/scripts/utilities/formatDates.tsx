import moment from "moment";

export const getFormattedDate = (timecodeFormat:string, date?:number) => {
	const dateObj = (date) ? moment.unix(date) : moment() 
	return dateObj.format(timecodeFormat);
};

export const getDateTimestamp = (timecode:number) => {
	return moment.unix(timecode).format('YYYY-MM-DD');
};


export const convertTimecodeToClock = (unixTimecode:number, timezoneOffsetSecs:number) => {
		return moment
						.unix(unixTimecode)
						.utc()
						.add(timezoneOffsetSecs, 'seconds')
						.format('HH:mm');
}