import readline from 'readline-sync';
import {read} from '../DAL/read.js'




export async function createLevel(){
    let diffic = readline.question('Choose difficulty: easy / medium / hard: ');

    if (diffic !== "easy" && diffic !== "medium" && diffic !== "hard") {
        await createLevel()
        return;
    }

    const allriddels = await read('./riddles/riddle.txt')
    const difarr = allriddels.filter(ch => ch.difficulty === diffic).sort(() => Math.random() - 0.5).slice(0, 5);
    return difarr
}