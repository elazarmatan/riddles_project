export async function updateTimeToPlayer(player,time,idx){
    await fetch(`http://localhost:2030/player/update/${idx}`,{
        method:'PUT',
        headers:{
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({"time":time,"property":"time"})
    })
}


