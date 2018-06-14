const expect = require('chai').expect
const app = require('../index');
const request = require('supertest');

const server = app.app;

describe('server', () => {
	describe('GET /', () => {
		it('should return the context of index.html', (done) => {
			request(server)
				.get('/')
				.expect(200, /<!DOCTYPE html/, done);
		})
    })
    
    describe('GET /js/products.js', () => {
        it('should return the context of products.js', (done) => {
            request(server)
                .get('/js/products.js')
                .expect(200, /class Products/, done)
        })
    })

	describe('GET /someNonsense', () => {
		it('should return a 404 error for any get request not defined', (done) => {
			request(server)
				.get('/someNonsense')
				.expect(404, done);
		})
	})

	describe('POST /anything', () => {
		it('should return a 404 error for any post request', (done) => {
			request(server)
				.post('/anything')
				.send('this is the sent message')
				.expect(404, done);
		})
	})
})
