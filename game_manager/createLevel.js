import {readFile} from 'node:fs/promises'
import readline from 'readline-sync';
import {read} from '../crud/read.js'




export async function createLevel(){
    let diffic = readline.question('Choose difficulty: easy / medium / hard: ');

    if (diffic !== "easy" && diffic !== "medium" && diffic !== "hard") {
        createLevel()
        return;
    }

    const p1 = await read('./riddles/riddle.txt')
    const allriddels = JSON.parse(p1)
    const difarr = allriddels.filter(ch => ch.difficulty === diffic).sort(() => Math.random() - 0.5).slice(0, 5);
    return difarr
}