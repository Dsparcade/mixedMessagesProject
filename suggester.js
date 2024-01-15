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
            suggestion.push(`What about a ${songElements[prop][elementIndex]}`);
            break;
        case 'genre':
            suggestion.push(`${songElements[prop][elementIndex]} song`);
            break;
        case 'decade':
            suggestion.push(`from the ${songElements[prop][elementIndex]}?`);
            break;
        default:
            suggestion.push('Cannot make suggestion.');
    }
}