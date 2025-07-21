import readline from 'readline-sync';
import { createEventToPlayer, game } from './game.js'
import { menuRiddles } from '../services/menuRiddles.js';
import { showAllPlayers } from '../services/showAllPlayers.js'
import { getPlayers } from './fetch.js'

export async function menu() {
    console.log('WELCOME TO RIDDLES')
    let flag = true
    while (flag) {
        console.log('\nmenu\n' +
            '1.new game\n' +
            '2.crud riddles\n' +
            '3.show all players\n' +
            '4.exit\n')
        const choice = readline.question('what your choice: ')
        switch (choice) {
            case '1':
                const player = createEventToPlayer()
                await new Promise(resolve => setTimeout(resolve, 1000))
                await game(player)
                break
            case '2':
                await new Promise(resolve => setTimeout(resolve, 1000))
                await menuRiddles()
                break
            case '3':
                await new Promise(resolve => setTimeout(resolve, 1000))
                let players = await getPlayers()
                showAllPlayers(players)
                break
            case '4':
                flag = false
            default:
                break
        }
    }
}
