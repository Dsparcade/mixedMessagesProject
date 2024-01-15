console.log("\nWelcome to the Karaoke Song Suggester 1.0!\n")

// Gets # from 0 -> num - 1
function generateRandomNumber(num) {
    return Math.floor(Math.random() * num)
}

const songElements = {
    genre: ['pop', 'rock', 'R&B', 'country'],
    decade: ['1960s', '1970s', '1980s', '1990s', '2000s', '2010s'],
    tempo: ['slow', 'mid-tempo', 'upbeat']
}