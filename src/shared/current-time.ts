/**
 * The asynchronous function `currentTime` returns the current time
 * as a string in the format of HH:MM:SS.
 */
const currentTime = async () => new Date().toLocaleTimeString();

export { currentTime };
