import allriddels from './riddles/allRiddles.js'
import riddle from './classes/riddle.js'
import readline from 'readline-sync';



export default function game(player){
    let diffic = readline.question('Choose difficulty: easy / medium / hard: ');
    if(diffic != "easy" && diffic != "medium" && diffic != "hard"){
        game()
    }
    const difarr = allriddels.filter(ch =>ch.difficulty === diffic)
    
   
    for(let i = 0;i < difarr.length;i++){  
        const rid1 = new riddle(difarr[i])
        let time = rid1.ask() 
        player.recordTime(time)      
    }
    player.showStats()

    const continu = readline.question('if you want to continue press v else enter any button: ')
    if (continu === "v"){
        game()
    }
}

