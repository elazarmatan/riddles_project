import { createClient } from "@supabase/supabase-js"
import 'dotenv/config'


const supabase = createClient(
    process.env.SUPABASE_URL,
    process.env.SUPABASE_KEY
)

export async function getAllPlayers() {
    const { data, error } = await supabase.from('players').select('*')
    if (error) throw new Error(error.message)
    return data
}

export async function create(player) {
    const { data, error } = await supabase.from('players').insert(player)
    if (error) throw new Error(error.message)
    return data
}

export async function update(name, property, value) {
    const { data, error } = await supabase.from('players').update({ [property]: value }).eq('name', name)
    if (error) throw new Error(error.message)
    return data
}

export async function checkIfPlayerExist(playerName) {
    const { data, error } = await supabase.from('players').select('*').eq('name', playerName)
    if (error) throw new Error(error.message)
    return data
}
