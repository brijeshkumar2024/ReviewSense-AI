import request from 'supertest';
import app from '../app';

describe('Server application', () => {
  it('responds with not found for a base route', async () => {
    const response = await request(app).get('/');
    expect(response.status).toBe(404);
  });
});
