export async function checkToken(token) {
    if (typeof token !== 'string') return 'error'
    const res = await fetch(`http://localhost:2030/player/token/${token}`)
     if(res.status === 400) return 'error'
    const finishRes = await res.json()
    return finishRes
}
