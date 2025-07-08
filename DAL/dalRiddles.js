import readline from 'readline-sync';
import {create} from './create.js'
import {update} from './update.js'
import {createRiddle} from '../services/createRiddle.js'
import {updateRiddle} from '../services/updateRiddle.js'
import {deleteRiddle} from '../services/deleteRiddle.js'
import {read} from './read.js'


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
                let dataExistC = await read('./DAL/riddle.txt')
                await create('./DAL/riddle.txt',dataExistC,createRiddle)
                break;
            case '2':
                let dataExistU = await read('./DAL/riddle.txt')
                await update('./DAL/riddle.txt',dataExistU,updateRiddle)
                break
            case '3':
                let dataExistD = await read('./DAL/riddle.txt')
                await update('./DAL/riddle.txt',dataExistD,deleteRiddle)
                break
            case '4':
                exit = false
            default:
                break;
        }
    }
}