export async function checkToken(token){
    const res = await fetch(`http://localhost:2030/player/token/${token}`)
    const finishRes = await res.json()
    return finishRes
}