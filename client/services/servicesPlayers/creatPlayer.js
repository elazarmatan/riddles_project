export async function createPlayer(PlayerName,playerTime) {
    let player = {}
    player.name = PlayerName
    player.time = playerTime
    const res = await fetch('http://localhost:2030/player/create ',{
        method: 'POST',
        body: JSON.stringify(player),
        headers: {
            "Content-Type": "application/json"
        }
    })
    return await res.json()
}



export async function checkIfPlayerExist(name) {
    const res = await fetch(`http://localhost:2030/player/getByName/${name}`)
    const exist = await res.json()
    if(exist.length > 0){
        return true
    }
    else{
        return false
    }
}



export async function getTimeToPlayer(name){
    const time = await fetch(`http://localhost:2030/player/getByName/${name}`)
    const finishTime = await time.json()
    return finishTime[0].time
}