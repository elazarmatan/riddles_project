import allriddels from '../riddles/allRiddles.js'
import riddle from '../classes/riddle.js'
import readline from 'readline-sync';
import Player from '../classes/player.js'



//"This function receives a name and creates a Player instance."
export function addPlayer() {
    const name = readline.question('What is your name: ');
    const pl = new Player(name);
    return pl;
}



// Main game function that runs one round of the riddle game.
// - Asks the user to choose a difficulty level.
// - Filters riddles by difficulty.
// - For each riddle:
//     - Tracks start and end time
//     - Adds time penalty if user was too slow
// - After all riddles:
//     - Shows total and average time
// - Asks if the user wants to continue playing.
export function game(player) {
    let diffic = readline.question('Choose difficulty: easy / medium / hard: ');

    if (diffic !== "easy" && diffic !== "medium" && diffic !== "hard") {
        game();
        return;
    }

    const difarr = allriddels.filter(ch => ch.difficulty === diffic);

    for (let i = 0; i < difarr.length; i++) {
        const rid1 = new riddle(difarr[i]);
        const enter = Date.now();
        let time = rid1.ask();
        const finish = Date.now();
        time += finish - enter;

        if (time > rid1.timeLimit * 1000) {
            time += 5000;
            console.log('Too slow! 5 seconds penalty applied');
        }

        player.recordTime(time);
    }

    player.showStats();

    const continu = readline.question('If you want to continue, press v. Otherwise, enter any key: ');
    if (continu === "v") {
        game(player);
    }
}
