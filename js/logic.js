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
    } else {
        status = 'Lost';
    }

    // read-outs of all the results
    choice.innerText = pick;
    flip.innerText = toss;
    result.innerText = status;
}

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