const server = require('../../src/app');
const session = require('supertest');
const agent = session(server);

describe("Test de Rutas", ()=>{
    describe('GET /pokemons/name', ()=>{
        it('Responde con status: 200', async ()=>{
            await agent.get('/pokemons/name?name=rayquaza').expect(200);
        });
        it('Responde con un arreglo de objetos con las propiedades: "id", "name", "image", "health", "attack", "defense", "speed", "height", "weight"', async ()=>{
            const response = (await agent.get('/pokemons/name?name=rayquaza')).body;
            expect(response).toHaveProperty("id");
            expect(response).toHaveProperty("name");
            expect(response).toHaveProperty("image");
            expect(response).toHaveProperty("health");
            expect(response).toHaveProperty("attack");
            expect(response).toHaveProperty("defense");
            expect(response).toHaveProperty("speed");
            expect(response).toHaveProperty("height");
            expect(response).toHaveProperty("weight");
        
        });
        it('Si hay un error responde con un status: 404', async ()=>{
            await agent.get('/pokemons/name?name=wqdcewfvrgebth').expect(404);
        })
    })
});