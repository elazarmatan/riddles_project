export async function checkToken(token) {
    if (typeof token!== 'string') {
        return ''
    }
    const res = await fetch(`http://localhost:2030/player/token/${token}`)
    const finishRes = await res.json()
    return finishRes
}