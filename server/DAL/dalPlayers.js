import { createClient } from "@supabase/supabase-js"

const supabase = createClient(
   'https://dpimlejpmkovqqtnhajw.supabase.co',
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImRwaW1sZWpwbWtvdnFxdG5oYWp3Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTMwMTE4NTksImV4cCI6MjA2ODU4Nzg1OX0.DuK5jzT5t-JW5hcMp5knfMcKrbC5fqgUlUbDiydF2Ms'
)

export async function getAllPlayers(){
    const {data,error} = await supabase.from('players').select('*')
    if(error) throw new Error(error.message)
    return data 
}

export async function create(player){
    const {data,error} = await supabase.from('players').insert(player)
    if(error) throw new Error(error.message)
    return data 
}

export async function update(name,property,value){
    const {data,error} = await supabase.from('players').update({[property]:value}).eq('name',name)
    if(error) throw new Error(error.message)
    return data 
}

export async function checkIfPlayerExist(playerName){
    const {data,error} = await supabase.from('players').select('*').eq('name',playerName)
    if(error) throw new Error(error.message)
    return data 
}

