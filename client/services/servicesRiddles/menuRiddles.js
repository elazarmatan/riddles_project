import readline from 'readline-sync';
import { createRiddle } from './createRiddle.js'
import { updateRiddle } from './updateRiddle.js'
import { deleteRiddle } from './deleteRiddle.js'
import { getRiddles } from '../../services/servicesRiddles/getAllRiddles.js'



export async function menuRiddles() {
    let exit = true
    while (exit) {
        console.log('menu riddies\n' +
            '1.create new riddle\n' +
            '2.update riddle exist\n' +
            '3.delete riddle\n' +
            '4.read\n' +
            '5.exit'
        )
        const choice = readline.question('what your choice: ')
        switch (choice) {
            case '1':
                await new Promise(resolve => setTimeout(resolve, 1000))
                const rescreate = await createRiddle()
                console.log(rescreate)
                break;
            case '2':
                await new Promise(resolve => setTimeout(resolve, 1000))
                await updateRiddle()
                break
            case '3':
                await new Promise(resolve => setTimeout(resolve, 1000))
                await deleteRiddle()
                break
            case '4':
                await new Promise(resolve => setTimeout(resolve, 1000))
                const riddles = await getRiddles()
                console.log(riddles)
            case '5':
                exit = false
            default:
                break;
        }
    }
}
