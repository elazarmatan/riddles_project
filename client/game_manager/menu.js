import readline from 'readline-sync';
import { game } from './game.js'
import { menuRiddlesAdmin } from '../services/servicesRiddles/menuRiddlesAdmin.js';
import { menuRiddlesUser } from '../services/servicesRiddles/menuRiddlesUser.js';
import { showAllPlayers } from '../services/servicesPlayers/showAllPlayers.js'
import { getPlayers } from '../services/servicesPlayers/getAllPlayers.js'




export async function menu(player) {
    console.log('WELCOME TO RIDDLES\n' +
        '==================='
    )
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
                await new Promise(resolve => setTimeout(resolve, 1000))
                await game(player.name)
                break
            case '2':
                await new Promise(resolve => setTimeout(resolve, 1000))
                if(player.role === 'user'){
                    await menuRiddlesUser()
                }
                if(player.role === 'admin'){
                    await menuRiddlesAdmin()
                }
                else{
                    console.log('you not have permission')
                }
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
