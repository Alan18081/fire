function Word(string) {
	this.str = string;
}

Word.prototype[Symbol.iterator] = function() {
	let i = 0;
	const array = this.str.split(' ');
	return {
		next() {
			if(i < array.length) {
				return {
					value: array[i++],
					done: false
				}
			} else {
				return {
					done: true
				}
			}

		}
	}
};

const res = new Word('My dear girl');

for(let word of res) {
	console.log(word);
}