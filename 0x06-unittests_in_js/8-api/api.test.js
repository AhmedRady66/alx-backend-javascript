const request = require('supertest');
const app = require('./api');

describe('Index Page', () => {
    it('should return correct status code', async () => {
        const res = await request(app).get('/');
        expect(res.status).toBe(200);
    });

    it('should return correct result', async () => {
        const res = await request(app).get('/');
        expect(res.text).toBe('Welcome to the payment system');
    });

    it('should have the correct content type', async () => {
        const res = await request(app).get('/');
        expect(res.header['content-type']).toMatch(/text\/html/);
    });
});
