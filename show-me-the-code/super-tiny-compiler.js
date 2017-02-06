function tokenizer(input) {
	var current = 0;
	var tokens = [];

	while (current < input.length) {
		var char = input[current];

		if (char === '(') {
			tokens.push({
				type: 'paren',
				value: '('
			});

			current++;
			continue;
		}

		if (char === ')') {
			tokens.push({
				type: 'paren',
				value: ')'
			});
			current++;
			continue;
		}

		var WHITESPACE = /\s/;
		if (WHITESPACE.test(char)) {
			current++;
			continue;
		}

		var NUMBERS = /[0-9]/;
		if (NUMBERS.test(char)) {
			var value = '';

			while (NUMBERS.test(char)) {
				value += char;
				char = input[++current];
			}

			tokens.push({
				type: 'number',
				value: value
			});

			continue;
		}

		var LETTERS = /[a-z]/i;
		if (LETTERS.test(char)) {
			var value = '';

			while (LETTERS.test(char)) {
				value += char;
				char = input[++current];
			}

			tokens.push({
				type: 'name',
				value: value
			});

			continue;
		}

		throw new TypeError('I donot know what this character is: ' + char);
	}

	return tokens;
}