export async function updateTimeToPlayer(time,name){
    const res = await fetch(`http://localhost:2030/player/update/${name}`,{
        method:'PUT',
        headers:{
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({"time":time,"property":"time"})
    })
    if (!res.ok) {
        const errorText = await res.text(); // נסה לקרוא טקסט במקום JSON
        throw new Error(`Server error: ${res.status} - ${errorText}`);
    }
    return await res.json()
}
