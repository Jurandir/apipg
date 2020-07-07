'use strict'

const database = use('Database')

class AppController {
    async index() {
        const result = await database.raw("select * from users")
               
        return result.rows 
    }
}

module.exports = AppController
