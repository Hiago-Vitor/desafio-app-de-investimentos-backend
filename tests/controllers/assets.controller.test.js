const sinon = require('sinon');
const chai = require('chai');
const sinonChai = require('sinon-chai');
const assetsController = require('../../src/controllers/assetsController');
const assetsService = require('../../src/services/assetsService');

chai.use(sinonChai);
const expect = chai.expect;

describe('Test assetsController', () => {
    describe('getAssetById', () => {
        const response = {};
        const request = {};
        const servResponse = {
            codAsset: 7,
            qtdAsset: 100,
            value: 10.03
        };

        before(() => {
            response.status = sinon.stub().returns(response);
            response.json = sinon.stub().returns();
            sinon.stub(assetsService, 'getById').resolves(servResponse);
        });

        after(() => {
            assetsService.getById.restore();
        });

        it('returns with status 200 and with an object', async () => {
            await assetsController.getAssetById(request, response);

            expect(response.status).to.have.been.calledOnceWith(200);
            expect(response.json).to.have.been.calledOnceWith(sinon.match.object);
            expect(response.json).to.have.been.calledOnceWith(servResponse);
        });
    });

    describe('getAssetByClient', () => {
        const response = {};
        const request = {};
        const servResponse = [
            {
                codAsset: 1,
                codClient: 1,
                qtdPurchased: 7,
                value: 28.74
            },
            {
                codAsset: 2,
                codClient: 1,
                qtdPurchased: 5,
                value: 28.74
            },
            {
                codAsset: 5,
                codClient: 1,
                qtdPurchased: 5,
                value: 28.74
            }
        ];

        before(() => {
            response.status = sinon.stub().returns(response);
            response.json = sinon.stub().returns();
            sinon.stub(assetsService, 'getByClient').resolves(servResponse);
        });

        after(() => {
            assetsService.getByClient.restore();
        });

        it('returns with status 200 and with an object', async () => {
            await assetsController.getAssetByClient(request, response);

            expect(response.status).to.have.been.calledOnceWith(200);
            expect(response.json).to.have.been.calledOnceWith(sinon.match.array);
            expect(response.json).to.have.been.calledOnceWith(servResponse);
        });
    });

    describe('In Case of Error', () => {
        const response = {};
        const request = {};
        const servResponse = { message: 'ativo inexistente' };

        describe('getAssetById', () => {
    
            before(() => {
                response.status = sinon.stub().returns(response);
                response.json = sinon.stub().returns();
                sinon.stub(assetsService, 'getById').resolves(false);
            });
    
            after(() => {
                assetsService.getById.restore();
            });
    
            it('returns with status 404 and with a message', async () => {
                await assetsController.getAssetById(request, response);
    
                expect(response.status).to.have.been.calledOnceWith(404);
                expect(response.json).to.have.been.calledOnceWith(sinon.match.object);
                expect(response.json).to.have.been.calledOnceWith(servResponse);
            });
        });

        describe('getAssetByClient', () => {
    
            before(() => {
                response.status = sinon.stub().returns(response);
                response.json = sinon.stub().returns();
                sinon.stub(assetsService, 'getByClient').resolves(false);
            });
    
            after(() => {
                assetsService.getByClient.restore();
            });
    
            it('returns with status 200 and with an object', async () => {
                await assetsController.getAssetByClient(request, response);
    
                expect(response.status).to.have.been.calledOnceWith(404);
                expect(response.json).to.have.been.calledOnceWith(sinon.match.object);
                expect(response.json).to.have.been.calledOnceWith(servResponse);
            });
        });
    });
});