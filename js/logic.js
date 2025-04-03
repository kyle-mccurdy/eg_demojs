// // declares global variables accessible outside a function
// let gamesPlayed = 0;
// let gamesWon = 0;
// let gamesLost = 0;

// main gameplay function
function flipCoin(x) {
    let pick = x; // pick is set to the passed-in parameter (from html)
    let choice = document.getElementById('choice'); // to show player choice
    let flip = document.getElementById('flip'); // to show flip result
    let result = document.getElementById('result'); // to show game result

    // Determines the face of the toss
    let randNum = Math.ceil(Math.random() * 2); // randomly a 1 or 2
    let toss; // to hold the toss result

    if (randNum === 1) {
        toss = 'Heads';
    } else {
        toss = 'Tails';
    }

    // determines the result of guess
    let status; // to hold the result of the guess
    if (pick === toss ) {
        status = "Won";
        // gamesWon++; // increments win counter
    } else {
        status = 'Lost';
        // gamesLost++; // increments loss counter
    }

    // gamesPlayed++; // increments games count

    // read-outs of the game results
    choice.innerText = pick;
    flip.innerText = toss;
    result.innerText = status;

    // // updates game history
    // displayPlayed.innerText = gamesPlayed;
    // displayWon.innerText = gamesWon;
    // displayLost.innerText = gamesLost;
}

// // resets the scoreboard, invoked from onclick in html
// function resetScore() {

//     // resets the score
//     gamesPlayed = 0;
//     gamesWon = 0;
//     gamesLost = 0;

//     // updates the display
//     displayPlayed.innerText = gamesPlayed;
//     displayWon.innerText = gamesWon;
//     displayLost.innerText = gamesLost;    
// }

// // Shows how to pass a paremeter
// function flipCoin(pick) {
//     let choice = document.getElementById('choice');
//     choice.innerText = pick;
// }

// function flipCoin() {
//     let display = document.getElementById('flip');
//     let randNum = Math.floor(Math.random() * 2) + 1;
//     let toss;
//     if (randNum == 1) {
//         toss = 'Tails';
//     } else {
//         toss = 'Heads';
//     }
//     display.innerText = toss;
//     console.log(randNum);
// }

// function flipCoin() {
//     let display = document.getElementById('flip');
//     let randNum = Math.floor(Math.random() * 2) + 1;
//     display.innerText = randNum;
//     console.log(randNum);
// }

// function flipCoin() {
//     let display = document.getElementById('flip');
//     // let randNum = Math.ceil(Math.random() * 4); // --> 1 to 4
//     // let randNum = Math.ceil(Math.random() * 2); // --> 1 or 2
//     // let randNum = Math.floor(Math.random() * 2); // --> 0 or 1
//     // let randNum = Math.ceil(Math.random()); // rounds up to integer
//     // let randNum = Math.floor(Math.random()); // rounds down to integer
//     let randNum = Math.random(); // generates digits between 0 and 1
//     display.innerText = randNum;
    
//     // logs randNum in the console (browser inspector)
//     console.log(randNum);
// }

// function flipCoin(x) {

//     let pick = x;

//     let result = document.getElementById('flip');
//     let choice = document.getElementById('choice');
//     let game = document.getElementById('result');

//     let randNum = Math.ceil(Math.random() * 2);

//     let face;
//     if (randNum == 1) {
//         face = "Heads";
//     } else {
//         face = "Tails";
//     }

//     let status;
//     if (face == choice) {
//         status = "Win";
//     } else {
//         status = "Loss";
//     }

//     result.innerText = face;
//     choice.innerText = pick;
//     game.innerText = status;

//     console.log(randNum);

// }