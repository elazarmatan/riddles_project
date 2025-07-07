import readline from 'readline-sync';
import {addPlayer,game} from './game.js'
import { dalRiddles } from '../DAL/dalRiddles.js';

export async function menu(){
    console.log('WELCOME TO RIDDLES')
    const player = addPlayer()
    let flag = true
    while(flag){
    console.log('menu\n'+
        '1.new game\n'+
        '2.crud riddles\n'+
        '3.exit')
         const choice = readline.question('what your choice')
         switch(choice){
            case '1':
            await game(player)
            break
            case '2':
                dalRiddles()
                break
            case '3':
                flag = false
            default:
                break
         }
    }
}