
export async function getRiddles() {
    const res = await fetch('https://riddles-project.onrender.com/riddle/getall');
    const data = await res.json()
    return data
}

export async function getPlayers(){
     const res = await fetch('https://riddles-project.onrender.com/player/getall');
    const data = await res.json()
    return data
}