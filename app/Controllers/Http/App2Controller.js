'use strict'

const database = use('Database')

class App2Controller {
    async index() {
        const result = await database.raw("select * from users")
               
        return result.fields 
    }
}

module.exports = App2Controller
