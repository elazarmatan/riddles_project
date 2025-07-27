import readline from 'readline-sync';
import { createPlayer, loginPlayer } from '../services/servicesPlayers/creatPlayer.js';
import { game } from './game.js'
import { checkToken } from './checkToken.js'
import { rescueToken, saveToken } from './saveToken.js';

export async function login() {
    let flag = true
    while (flag) {
        console.log('LOGIN\n' +
            '1.Login using username and password\n' +
            '2.New User Login\n' +
            '3.Guest login\n' +
            '4.token login\n'
        )
        const login = readline.question('How do you want to enter?: ')
        switch (login) {
            case '1':
                const resold = await loginPlayer()
                if (resold === 'err') {
                    console.log('name or password not match try again')
                    break;
                }
                await saveToken(resold.token)
                return resold
            case '2':
                await new Promise(resolve => setTimeout(resolve, 1000))
                const newPlayer = await createPlayer()
                if (newPlayer === 'err') {
                    console.log('the name exist in system choose another name')
                    break;
                }
                else {
                    await saveToken(newPlayer.token)
                    return newPlayer
                }
            case '3':
                const name = readline.question('What is your name: ');
                const status = 'guest'
                await game(name, status)
                flag = false
            case '4':
                const token = await rescueToken()
                const checktoken = await checkToken(token)
                if (checktoken.status === 400) {
                    console.log('hhh')
                    break;
                }
                return checktoken
            default:
                console.log('is not option')
                break;
        }
    }
}