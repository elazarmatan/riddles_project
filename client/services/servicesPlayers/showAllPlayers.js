export function showAllPlayers(players) {
    const allPlayers = players.sort((a, b) => a.time - b.time)
    console.log('-----------------------')
    allPlayers.forEach((a, i) => {
        if (i < 5) {
            console.log(`${i + 1} player ${a.name}:${a.time / 1000}\n===================\n`)
        }
    })
}

