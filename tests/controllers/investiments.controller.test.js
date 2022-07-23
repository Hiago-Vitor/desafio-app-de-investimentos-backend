const sinon = require('sinon');
const chai = require('chai');
const sinonChai = require('sinon-chai');
const investimentsController = require('../../src/controllers/investmentsController');
const buyService = require('../../src/services/buyService');

const sellService = require('../../src/services/sellService');

chai.use(sinonChai);
const expect = chai.expect;

describe('Test investimentsController', () => {
    describe('buyAsset', () => {
        const response = {};
        const request = {
            codClient: 1,
            codAsset: 7,
            qtdAsset: 10
        }
        const servResponse = { message: 'compra realizada com sucesso!' };

        before(() => {
            response.status = sinon.stub().returns(response);
            response.json = sinon.stub().returns(request);
            sinon.stub(buyService, 'buyAssetServ').resolves(true);
        });

        after(() => {
            buyService.buyAssetServ.restore();
        });

        it('returns with status 201 and with a message', async () => {
            await investimentsController.buyAsset(request, response);

            expect(response.status).to.have.been.calledOnceWith(201);
            expect(response.json).to.have.been.calledOnceWith(sinon.match.object);
            expect(response.json).to.have.been.calledOnceWith(servResponse);
        });
    });

    describe('sellAsset', () => {
        const response = {};
        const request = {
            codClient: 1,
            codAsset: 7,
            qtdAsset: 10
        }
        const servResponse = { message: 'venda realizada com sucesso!' };

        before(() => {
            response.status = sinon.stub().returns(response);
            response.json = sinon.stub().returns(request);
            sinon.stub(sellService, 'sellAssetServ').resolves(true);
        });

        after(() => {
            sellService.sellAssetServ.restore();
        });

        it('returns with status 201 and with a message', async () => {
            await investimentsController.sellAsset(request, response);

            expect(response.status).to.have.been.calledOnceWith(201);
            expect(response.json).to.have.been.calledOnceWith(sinon.match.object);
            expect(response.json).to.have.been.calledOnceWith(servResponse);
        });
    });
});