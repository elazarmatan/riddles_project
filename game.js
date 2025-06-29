import allriddels from './riddles/allRiddles.js'
import Player from './classes/player.js'
import riddle from './classes/riddle.js'
import readline from 'readline-sync';



export default function game(){
    const name = readline.question('whatt your name')
    const pl = new Player(name)
    let flag = true
    let counter = 0
    while(flag){
        if (counter === allriddels.length){
            flag = false
        }
        else{
        let enter1 = Date.now()
        const rid1 = new riddle(allriddels[counter])
        rid1.ask()
        let finish1 = Date.now()
        pl.recordTime(enter1,finish1)
        }
        counter++
    }
    pl.showStats()
}

