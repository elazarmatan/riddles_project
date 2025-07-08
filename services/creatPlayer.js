export function createPlayer(id,showPlayer){
    let player = {id:id + 1}
    player.name = showPlayer.name
    player.time = showPlayer. getAlltime()
    return player
}

export function checkIfPlayerExist(data,name){
    let exist = false
    data.forEach(obj =>{
        if(obj.name === name){
            exist = true
        }
    })
    return exist
}
