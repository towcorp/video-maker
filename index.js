const readline = require('readline-sync')
<<<<<<< HEAD
const robots = {
	//userInput: require('./robots/user-Input')
    text: require('./robots/text.js')
}

async function start() {
=======

function start() {
>>>>>>> a647f2bbe7bba50757072085d223022390a7e1a5
	const content = {}

	content.searchTerm = askAndReturnSearchTerm()
	content.prefix = askAndReturnPrefix()
<<<<<<< HEAD
	
	//robots.userInput(content)
	await robots.text(content)
	
=======
>>>>>>> a647f2bbe7bba50757072085d223022390a7e1a5

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
>>>>>>> a647f2bbe7bba50757072085d223022390a7e1a5

	console.log(content)
}

start()

