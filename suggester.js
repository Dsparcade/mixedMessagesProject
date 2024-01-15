console.log("\nWelcome to the Karaoke Song Suggester 1.0!\n");

// Gets # from 0 -> num - 1
function generateRandomNumber(num) {
    return Math.floor(Math.random() * num);
}

const songElements = {
    tempo: ['slow', 'mid-tempo', 'upbeat'],
    genre: ['pop', 'rock', 'R&B', 'country'],
    decade: ['1960s', '1970s', '1980s', '1990s', '2000s', '2010s']
};

let completeSuggestion = [];

//Iterate over songElements object
for(let prop in songElements) {
    let elementIndex = generateRandomNumber(songElements[prop].length);

    switch(prop) {
        case 'tempo':
            completeSuggestion.push(`What about ${songElements[prop][elementIndex]}`);
            break;
        case 'genre':
            completeSuggestion.push(`${songElements[prop][elementIndex]} songs`);
            break;
        case 'decade':
            completeSuggestion.push(`from the ${songElements[prop][elementIndex]}?`);
            break;
        default:
            completeSuggestion.push('Cannot make suggestion.');
    }
}

function joinedSuggestion(suggestionArray) {
    const joinedSuggestion = completeSuggestion.join(' ');
    console.log(joinedSuggestion);
    console.log('\n');
}

joinedSuggestion(completeSuggestion);