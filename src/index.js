import app from './app.js'
import { sequelize } from './database/database.js';


async function main() {
    try {
        await sequelize.sync({force: false});
        console.log('la conexion establecida')
        app.listen(3000)
        console.log('Server encendido en puerto. 3000') 
    } catch (error) {
        console.error('la conexion no se logro establecer: ', error)
    }
}

main();