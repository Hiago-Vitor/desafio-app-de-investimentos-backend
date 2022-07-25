const sinon = require('sinon');
const chai = require('chai');
const sinonChai = require('sinon-chai');
const loginController = require('../../src/controllers/loginController');
const loginService = require('../../src/services/loginService');

chai.use(sinonChai);
const expect = chai.expect;

describe('Test loginController', () => {
    describe('authClient', () => {
        const response = {};
        const request = {
            email: "test@test.com",
            password: "password"
        };
        const servResponse = {
            token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InRlc3RAdGVzdC5jb20iLCJpYXQiOjE2NTg1OTU0OTYsImV4cCI6MTY1ODU5NjM5Nn0.Q6fkI8NB1mfSAf7KeHmgysnKYk9mo4vAKaq95yP7Fks'
        };

        before(() => {
            response.status = sinon.stub().returns(response);
            response.json = sinon.stub().returns(request);
            sinon.stub(loginService, 'authClient').resolves(servResponse);
        });

        after(() => {
            loginService.authClient.restore();
        });

        it('returns with status 200 and with an object', async () => {
            await loginController.authClient(request, response);

            expect(response.status).to.have.been.calledOnceWith(200);
            expect(response.json).to.have.been.calledOnceWith(sinon.match.object);
            expect(response.json).to.have.been.calledOnceWith(servResponse);
        });
    });

    describe('authClient in case of login unauthorized', () => {
        const response = {};
        const request = {};
        const servResponse = { message: 'login não autorizado' };

        before(() => {
            response.status = sinon.stub().returns(response);
            response.json = sinon.stub().returns();
            sinon.stub(loginService, 'authClient').resolves(false);
        });

        after(() => {
            loginService.authClient.restore();
        });

        it('returns with status 200 and with an object', async () => {
            await loginController.authClient(request, response);

            expect(response.status).to.have.been.calledOnceWith(401);
            expect(response.json).to.have.been.calledOnceWith(sinon.match.object);
            expect(response.json).to.have.been.calledOnceWith(servResponse);
        });
    });
});