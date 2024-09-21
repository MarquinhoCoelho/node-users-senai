import { sql } from './db.js'
import { randomUUID } from 'crypto'

export class Database {
    async get() {
        return await sql`select * from jogadores`
    }

    async post(jogador) {
        await sql`insert into jogadores (id, name, position, age)
        values (${randomUUID()}, ${jogador.name}, ${jogador.position}, ${jogador.age})`
        
        return await this.get();
    }

    async put(id, user) {
        await sql`UPDATE jogadores SET 
        name = ${user.name},
        password = ${user.password},
        profile = ${user.profile}
        WHERE id = ${id}`
        
        return await this.get();
    }

    async delete(id) {
        await sql`DELETE FROM jogadores 
        WHERE id = ${id}`
        
        return await this.get();
    }
    

}