export async function getRiddles() {
    const res = await fetch('http://localhost:2030/riddle/getall');
    const data = await res.json()
    return data
}