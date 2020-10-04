const readline = require('readline-sync')
const state = require('./state.js')

function robot() {
	const content = {
		maximumSentences: 7
	}
	
	content.searchTerm = askAndReturnSearchTerm()
	content.lang = askAndReturnLanguage()
	content.prefix = askLanguageQuestion()
	
	
	state.save(content)

	function askAndReturnSearchTerm() {
		return readline.question('Type a Wikipedia search term: ')
	}

	function askAndReturnPrefix() {
		const prefixes = ['Who is', 'What is', 'The history of']
		const selectedPrefixIndex = readline.keyInSelect(prefixes, 'Choose one option: ')
		const selectedPrefixText = prefixes[selectedPrefixIndex]
			
		return selectedPrefixText
	}
	
	function askAndReturnPrefix2() {
		const prefixes = ['Quem e', 'O que e', 'A historia de']
		const selectedPrefixIndex = readline.keyInSelect(prefixes, 'Escolha uma opcao: ')
		const selectedPrefixText = prefixes[selectedPrefixIndex]	
		
		return selectedPrefixText
	}
	
	function askLanguageQuestion() {
		if (content.lang == "en") {
			return askAndReturnPrefix()
			
		} else {
			return askAndReturnPrefix2()
		}
		
	}
	
	function askAndReturnLanguage(){
		const language = ["pt","en"]
		const selectedLangIndex = readline.keyInSelect(language,'Choice Language: ')
		const selectedLangText = language[selectedLangIndex]
		return selectedLangText
	}
	  
}
	

module.exports = robot