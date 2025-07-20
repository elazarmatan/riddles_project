
export async function getRiddles() {
    const res = await fetch('http://localhost:2030/riddle/getall');
    const data = await res.json()
    return data
}

export async function getPlayers(){
     const res = await fetch('http://localhost:2030/player/getall');
    const data = await res.json()
    return data
}