import * as cr from '../services/createLevel.js'
import riddle from '../models/riddle.js'
import readline from 'readline-sync';
import Player from '../models/player.js'
import { checkIfPlayerExist, createPlayer } from '../services/creatPlayer.js'
import { updateTimeToPlayer } from '../services/updateTimeToPlayer.js'
import { getPlayers, getRiddles } from './fetch.js'


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
    const allRiddles = await getRiddles()
    const difarr = await cr.createLevel(allRiddles)
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
    let players = await getPlayers()
    const idx = players.findIndex(pl => pl.name === player.name)
    const allTime = player.getAlltime()
    if (checkIfPlayerExist(players, player.name)) {
        if (players[idx].time > allTime) {
            console.log(`\nCongratulations ${player.name} You broke your own record\n`)
            player.showStats()
            await updateTimeToPlayer(allTime, idx)
        }
        else {
            player.showStats()
        }
    }
    else {
        await createPlayer(player)
        player.showStats()
    }

    player.ResetArray();

    const continu = readline.question('\nIf you want to continue, press v. Otherwise, enter any key: ');
    if (continu === "v") {
        await game(player);
    }
}
