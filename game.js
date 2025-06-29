import allriddels from './riddles/allRiddles.js'
import Player from './classes/player.js'
import riddle from './classes/riddle.js'
import readline from 'readline-sync';



export default function game(){
    const diffic = readline.question('Choose difficulty: easy / medium / hard: ');
    const difarr = allriddels.filter(ch =>ch.difficulty === diffic)
    const name = readline.question('whatt your name')
    const pl = new Player(name)
   
    for(let i = 0;i < difarr.length;i++){
        
        const rid1 = new riddle(difarr[i])
        let time = rid1.ask() 
        pl.recordTime(time)      
    }
    pl.showStats()
}

