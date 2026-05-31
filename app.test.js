
const request=require('supertest');
const app=require('./index');

test('GET /alumnos', async()=>{
 const res=await request(app).get('/alumnos');
 expect(res.statusCode).toBe(200);
});

test('GET /promedio', async()=>{
 const res=await request(app).get('/promedio');
 expect(res.statusCode).toBe(200);
});
