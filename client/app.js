import { menu } from "./game_manager/menu.js";
import { login } from './game_manager/login.js'

const name = await login()
menu(name)