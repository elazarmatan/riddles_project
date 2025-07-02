import allriddels from '../riddles/allRiddles.js'
import riddle from '../classes/riddle.js'
import readline from 'readline-sync';
import Player from '../classes/player.js'


export function addPlayer(){
    const name = readline.question('whatt your name: ')
    const pl = new Player(name)
    return pl
}
export  function game(player){
    let diffic = readline.question('Choose difficulty: easy / medium / hard: ');
    if(diffic != "easy" && diffic != "medium" && diffic != "hard"){
        game()
    }
    const difarr = allriddels.filter(ch =>ch.difficulty === diffic)

   
    for(let i = 0;i < difarr.length;i++){  
        const rid1 = new riddle(difarr[i])
        let enter = Date.now()
        let time = rid1.ask()
        let finish = Date.now()
        time += finish - enter 
        if(time  > rid1.timeLimit){
            time += 5000
            console.log('Too slow! 5 seconds penalty applied')
        }
        player.recordTime(time)      
    }
    player.showStats()

    const continu = readline.question('if you want to continue press v else enter any button: ')
    if (continu === "v"){
        game()
    }
}



