const app = require('../app');
const session = require('supertest');
const agent = session(app);

describe('Test de GET rickandmorty/{id}', () => {
    xit('Responde con status: 200', (done) => {
        agent
            .get('rickandmorty/character/1')
            .expect(200)
            .end(done);

    });


});

