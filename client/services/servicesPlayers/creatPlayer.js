import readline from 'readline-sync';
import { updateTimeToPlayer } from './updateTimeToPlayer.js'


export async function createPlayer() {
    let player = {}
    player.name = readline.question('What is your name: ');
    player.password = readline.question('What is your password: ');
    player.role = 'user'
    const res = await fetch('http://localhost:2030/player/create ', {
        method: 'POST',
        body: JSON.stringify(player),
        headers: {
            "Content-Type": "application/json"
        }
    })
    if(res.status === 400) return 'err'
    return await res.json()
}

export async function loginPlayer() {
    let player = {}
    const name = readline.question('What is your name: ');
    const password = readline.question('What is your password: ');
    player.name = name
    player.password = password
    const res = await fetch('http://localhost:2030/player/login ', {
        method: 'POST',
        body: JSON.stringify(player),
        headers: {
            "Content-Type": "application/json"
        }
    })
    if(res.status === 403) return 'err'
    return await res.json()
}







export async function getTimeToPlayer(name) {
    const time = await fetch(`http://localhost:2030/player/getByName/${name}`)
    const finishTime = await time.json()
    if(finishTime.length === 0){ console.log('not time'); return; }
    return finishTime[0].time
}


export async function checkBrokeRecord(player) {
    const allTime = player.getAlltime()
    await new Promise(resolve => setTimeout(resolve, 1000))
    const playerRecord = await getTimeToPlayer(player.name)
    if (playerRecord !== null) {
        if (playerRecord > allTime) {
            console.log(`\nCongratulations ${player.name} You broke your own record\n`)
            await new Promise(resolve => setTimeout(resolve, 1000))
            const update = await updateTimeToPlayer(allTime, player.name)
            console.log(update)
        }
    }
    else {
        await new Promise(resolve => setTimeout(resolve, 1000))
        const update = await updateTimeToPlayer(allTime, player.name)
    }
}