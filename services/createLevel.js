import readline from 'readline-sync';
import { read } from '../DAL/read.js'




export async function createLevel(allriddels) {
    let flag = true
    while (flag) {
        let diffic = readline.question('Choose difficulty: easy / medium / hard: ');
        if (diffic === "easy" || diffic === "medium" || diffic === "hard") {
            const difarr = allriddels.filter(ch => ch.difficulty === diffic).sort(() => Math.random() - 0.5).slice(0, 5);
            return difarr
        }
    }

}