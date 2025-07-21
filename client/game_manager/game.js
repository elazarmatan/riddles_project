import { createLevel } from '../services/createLevel.js'
import riddle from '../models/riddle.js'
import readline from 'readline-sync';
import Player from '../models/player.js'
import { checkIfPlayerExist, createPlayer, getTimeToPlayer } from '../services/creatPlayer.js'
import { updateTimeToPlayer } from '../services/updateTimeToPlayer.js'


//"This function receives a name and creates a Player instance."
export function createEventToPlayer() {
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
export async function game(player) {
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
    const allTime = player.getAlltime()
    await new Promise(resolve => setTimeout(resolve, 1000))
    const playerExist = await checkIfPlayerExist(player.name)
    if (playerExist) {
        await new Promise(resolve => setTimeout(resolve, 1000))
        const playerRecord = await getTimeToPlayer(player.name)
        if (playerRecord > allTime) {
            console.log(`\nCongratulations ${player.name} You broke your own record\n`)
            player.showStats()
            await new Promise(resolve => setTimeout(resolve, 1000))
            const update = await updateTimeToPlayer(allTime, player.name)
            console.log(update)
        }
        else {
            player.showStats()
        }
    }
    else {
        await new Promise(resolve => setTimeout(resolve, 1000))
        const create = await createPlayer(player.name, allTime)
        console.log(create)
        player.showStats()
    }

    player.ResetArray();

    const continu = readline.question('\nIf you want to continue, press v. Otherwise, enter any key: ');
    if (continu === "v") {
        await game(player);
    }
}
