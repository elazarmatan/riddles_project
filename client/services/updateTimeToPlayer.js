export async function updateTimeToPlayer(time,idx){
    await fetch(`https://riddles-project.onrender.com/player/update/${idx}`,{
        method:'PUT',
        headers:{
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({"time":time,"property":"time"})
    })
}
