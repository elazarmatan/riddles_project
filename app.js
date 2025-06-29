
import Player from './classes/player.js'
import game from './game.js'
import readline from 'readline-sync';

function addPlayer(){
    const name = readline.question('whatt your name')
     const pl = new Player(name)
     return pl
}
const player = addPlayer()
game(player)
