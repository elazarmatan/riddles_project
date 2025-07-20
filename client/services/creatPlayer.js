export async function createPlayer(showPlayer) {
    let player = {}
    player.name = showPlayer.name
    player.time = showPlayer.getAlltime()
    await fetch('http://localhost:2030/player/create ',{
        method: 'POST',
        body: JSON.stringify(player),
        headers: {
            "Content-Type": "application/json"
        }
    })
}

export function checkIfPlayerExist(data, name) {
    let exist = false
    data.forEach(obj => {
        if (obj.name === name) {
            exist = true
        }
    })
    return exist
}
