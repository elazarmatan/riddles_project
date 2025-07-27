import readline from 'readline-sync';
import { createRiddle } from './createRiddle.js'
import { getRiddles } from './getAllRiddles.js'



export async function menuRiddlesUser() {
    let exit = true
    while (exit) {
        console.log('menu riddies\n' +
            '1.create new riddle\n' +
            '2.read\n' +
            '3.exit'
        )
        const choice = readline.question('what your choice: ')
        switch (choice) {
            case '1':
                await new Promise(resolve => setTimeout(resolve, 1000))
                await createRiddle()
                break;
            case '2':
                await new Promise(resolve => setTimeout(resolve, 1000))
                await getRiddles()
            case '3':
                exit = false
            default:
                break;
        }
    }
}
