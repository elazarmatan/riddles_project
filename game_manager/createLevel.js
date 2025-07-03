import {readFile} from 'node:fs/promises'
import readline from 'readline-sync';

async function read() {
    return readFile('./riddles/riddle.txt', 'utf8')
}


export async function createLevel(){
    let diffic = readline.question('Choose difficulty: easy / medium / hard: ');

    if (diffic !== "easy" && diffic !== "medium" && diffic !== "hard") {
        game();
        return;
    }

    const p1 = await read()
    const allriddels = JSON.parse(p1)
    const difarr = allriddels.filter(ch => ch.difficulty === diffic).sort(() => Math.random() - 0.5).slice(0, 5);
    return difarr
}