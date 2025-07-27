import { createLevel } from '../services/servicesRiddles/createLevel.js'
import riddle from '../models/riddle.js'
import readline from 'readline-sync';
import Player from '../models/player.js'
import { checkBrokeRecord } from '../services/servicesPlayers/creatPlayer.js'





// Main game function that runs one round of the riddle game.
// - Asks the user to choose a difficulty level.
// - Filters riddles by difficulty.
// - For each riddle:
//     - Tracks start and end time
//     - Adds time penalty if user was too slow
// - After all riddles:
//     - Shows total and average time
// - Asks if the user wants to continue playing.
export async function game(name, status) {
    const player = new Player(name);
     await new Promise(resolve => setTimeout(resolve, 1000))
    const difarr = await createLevel()
    let time
    for (let i = 0; i < difarr.length; i++) {
        const rid1 = new riddle(difarr[i]);
        const enter = Date.now();
        time = rid1.ask();
        const finish = Date.now();
        time += finish - enter;

        if (time > rid1.timeLimit) {
            time += 5000;
            console.log('Too slow! 5 seconds penalty applied');
        }

        player.recordTime(time);
    }
    await new Promise(resolve => setTimeout(resolve, 1000))
    if (status !== 'guest') {
        await new Promise(resolve => setTimeout(resolve, 1000))
        await checkBrokeRecord(player)
    }

    player.showStats()

    player.ResetArray();

    const continu = readline.question('\nIf you want to continue, press v. Otherwise, enter any key: ');
    if (continu === "v") {
        await game(player);
    }
}
