const readline = require('readline-sync')
const robots = {
	//userInput: require('./robots/user-Input')
    text: require('./robots/text.js')
}

async function start() {
	const content = {}

	content.searchTerm = askAndReturnSearchTerm()
	content.prefix = askAndReturnPrefix()
	
	//robots.userInput(content)
	await robots.text(content)
	

	function askAndReturnSearchTerm() {
		return readline.question('Type a Wikipedia search term: ')
	}

	function askAndReturnPrefix() {
		const prefixes = ['Who is', 'What is', 'The history of']
		const selectedPrefixIndex = readline.keyInSelect(prefixes, 'Choose one option: ')
		const selectedPrefixText = prefixes[selectedPrefixIndex]
		

		return selectedPrefixText
<<<<<<< HEAD
	}
=======
    }

>>>>>>> aa1a8da2b52d3f0e119a044cdd82c3dd84eb7296
	console.log(content)
}

start()