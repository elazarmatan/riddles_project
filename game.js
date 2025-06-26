import allriddels from './riddles/allRiddles.js'
import Player from './classes/player.js'
import riddle from './classes/riddle.js'
import readline from 'readline-sync';



export default function game(){

    const name = readline.question('whatt your name')
    const p = new Player(name)
    let enter1 = Date.now()
    const rid1 = new riddle(allriddels.r1)
    rid1.ask()
    let finish1 = Date.now()
    p.recordTime(enter1,finish1)

    let enter2 = Date.now()
    const rid2 = new riddle(allriddels.r2)
    rid2.ask()
    let finish2 = Date.now()
    p.recordTime(enter2,finish2)

    p.showStats()
}

