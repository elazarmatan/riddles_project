import readline from 'readline-sync';
import { create } from './create.js'
import { update } from './update.js'
import { createRiddle } from '../services/createRiddle.js'
import { updateRiddle } from '../services/updateRiddle.js'
import { deleteRiddle } from '../services/deleteRiddle.js'
import { read } from './read.js'
import {getRiddles} from '../game_manager/fetch.js'


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
                let dataExistD = await read('./DAL/riddle.txt')
                await update('../server/db/riddle.txt', dataExistD, deleteRiddle)
                break
            case '4':
                exit = false
            default:
                break;
        }
    }
}
