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
                await new Promise(resolve => setTimeout(resolve, 1000))
                const resold = await loginPlayer()
                if (resold === 'err') {
                    console.log('name or password not match try again')
                    break;
                }
                await new Promise(resolve => setTimeout(resolve, 1000))
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
                await new Promise(resolve => setTimeout(resolve, 1000))
                    await saveToken(newPlayer.token)
                    return newPlayer
                }
            case '3':
                const name = readline.question('What is your name: ');
                const status = 'guest'
                await new Promise(resolve => setTimeout(resolve, 1000))
                await game(name, status)
                flag = false
            case '4':
                await new Promise(resolve => setTimeout(resolve, 1000))
                const token = await rescueToken()
                await new Promise(resolve => setTimeout(resolve, 1000))
                const checktoken = await checkToken(token)
                if(checktoken === 'error'){
                     console.log('token is not valid')
                    break
                }
                console.log(checktoken)
                return checktoken
            default:
                console.log('is not option')
                break;
        }
    }
}