import {readFile} from 'node:fs/promises'

export async function read(path) {
    return readFile(path, 'utf8')
}