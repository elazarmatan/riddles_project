import readline from 'readline-sync';
import { createRiddle } from '../services/createRiddle.js'
import { updateRiddle } from '../services/updateRiddle.js'
import { deleteRiddle } from '../services/deleteRiddle.js'


export async function dalRiddles() {
    let exit = true
    while (exit) {
        console.log('menu\n' +
            '1.create new riddle\n' +
            '2.update riddle exist\n' +
            '3.delete riddle\n' +
            '4.exit'
        )
        const choice = readline.question('what your choice: ')
        switch (choice) {
            case '1':
                await createRiddle()
                break;
            case '2':
                await updateRiddle()
                break
            case '3':
                await deleteRiddle()
                break
            case '4':
                exit = false
            default:
                break;
        }
    }
}
