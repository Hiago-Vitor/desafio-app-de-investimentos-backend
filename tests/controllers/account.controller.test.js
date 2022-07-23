const sinon = require('sinon');
const chai = require('chai');
const sinonChai = require('sinon-chai');
const accountController = require('../../src/controllers/accountController');
const accountService = require('../../src/services/accountService');

chai.use(sinonChai);
const expect = chai.expect;

describe('Test accountController', () => {
    describe('newDeposit', () => {
        const response = {};
        const request = {};
        const servResponse = { message: 'depósito realizado com sucesso' };

        before(() => {
            response.status = sinon.stub().returns(response);
            response.json = sinon.stub().returns();
            sinon.stub(accountService, 'deposit').resolves(true);
        });

        after(() => {
            accountService.deposit.restore();
        });

        it('returns with status 201 and with a message', async () => {
            await accountController.newDeposit(request, response);

            expect(response.status).to.have.been.calledOnceWith(201);
            expect(response.json).to.have.been.calledOnceWith(sinon.match.object);
            expect(response.json).to.have.been.calledOnceWith(servResponse);
        });
    });

    describe('newWithdraw', () => {
        const response = {};
        const request = {};
        const servResponse = { message: 'saque realizado com sucesso' };

        before(() => {
            response.status = sinon.stub().returns(response);
            response.json = sinon.stub().returns();
            sinon.stub(accountService, 'withdraw').resolves(true);
        });

        after(() => {
            accountService.withdraw.restore();
        });

        it('returns with status 201 and with a message', async () => {
            await accountController.newWithdraw(request, response);

            expect(response.status).to.have.been.calledOnceWith(201);
            expect(response.json).to.have.been.calledOnceWith(sinon.match.object);
            expect(response.json).to.have.been.calledOnceWith(servResponse);
        });
    });

    describe('getBalance', () => {
        const response = {};
        const request = {};
        const servResponse = {
            idClient: 2,
            balance: 700.49
        };

        before(() => {
            response.status = sinon.stub().returns(response);
            response.json = sinon.stub().returns(servResponse);
            sinon.stub(accountService, 'balance').resolves(servResponse);
        });

        after(() => {
            accountService.balance.restore();
        });

        it('returns with status 200 and with an object', async () => {
            await accountController.getBalance(request, response);
            
            expect(response.status).to.have.been.calledOnceWith(200);
            expect(response.json).to.have.been.calledOnceWith(sinon.match.object);
            expect(response.json).to.have.been.calledOnceWith(servResponse);
        });
    });

    describe('In Case of Error', () => {
        const response = {};
        const request = {};
        const servResponse = { message: 'cliente não existe na base de dados' };
        describe('newDeposit', () => {
    
            before(() => {
                response.status = sinon.stub().returns(response);
                response.json = sinon.stub().returns();
                sinon.stub(accountService, 'deposit').resolves(false);
            });
    
            after(() => {
                accountService.deposit.restore();
            });
    
            it('returns with status 401 and with a message', async () => {
                await accountController.newDeposit(request, response);
    
                expect(response.status).to.have.been.calledOnceWith(401);
                expect(response.json).to.have.been.calledOnceWith(sinon.match.object);
                expect(response.json).to.have.been.calledOnceWith(servResponse);
            });
        });

        describe('newWithdraw', () => {
    
            before(() => {
                response.status = sinon.stub().returns(response);
                response.json = sinon.stub().returns();
                sinon.stub(accountService, 'withdraw').resolves(false);
            });
    
            after(() => {
                accountService.withdraw.restore();
            });
    
            it('returns with status 401 and with a message', async () => {
                await accountController.newWithdraw(request, response);
    
                expect(response.status).to.have.been.calledOnceWith(401);
                expect(response.json).to.have.been.calledOnceWith(sinon.match.object);
                expect(response.json).to.have.been.calledOnceWith(servResponse);
            });
        });

        describe('getBalance', () => {
    
            before(() => {
                response.status = sinon.stub().returns(response);
                response.json = sinon.stub().returns(servResponse);
                sinon.stub(accountService, 'balance').resolves(false);
            });
    
            after(() => {
                accountService.balance.restore();
            });
    
            it('returns with status 401 and with an object', async () => {
                await accountController.getBalance(request, response);
                
                expect(response.status).to.have.been.calledOnceWith(401);
                expect(response.json).to.have.been.calledOnceWith(sinon.match.object);
                expect(response.json).to.have.been.calledOnceWith(servResponse);
            });
        });
    });
});