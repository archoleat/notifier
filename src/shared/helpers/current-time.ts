/** @return time as a string in the format of HH:MM:SS. */
const currentTime = async () => new Date().toLocaleTimeString();

export { currentTime };
