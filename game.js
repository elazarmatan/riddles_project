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
        let enter = Date.now()
        const rid1 = new riddle(difarr[i])
         rid1.ask()
        let finish = Date.now()
        let time = finish - enter 
        if(time  > difarr[i].timeLimit){
            time += 5000
            console.log('Too slow! 5 seconds penalty applied')
        }
        
        pl.recordTime(0,time)      
    }
    pl.showStats()
}

