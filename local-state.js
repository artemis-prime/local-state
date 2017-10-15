let set = (key, val) => {
	//console.log(`localstate setting ${key} to ${val}...`);
	window.localStorage.setItem(key, val);
}

let get = (key) => {
	let result =  window.localStorage.getItem(key);
	//console.log(`localstate getting ${key} which is ${result}...`);
	return result;
}

let clear = (key) => {
	window.localStorage.removeItem(key);
}

module.exports = {
	set: set,
	get: get,
	clear: clear
};
