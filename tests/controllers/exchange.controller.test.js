const sinon = require('sinon');
const chai = require('chai');
const sinonChai = require('sinon-chai');
const exchangeController = require('../../src/controllers/exchangeController');
const exchangeService = require('../../src/services/exchangeService');

chai.use(sinonChai);
const expect = chai.expect;

describe('Test exchangeController', () => {
    describe('getAllAssets', () => {
        const response = {};
        const request = { };
        const servResponse = [
            { idAsset: 1, tag: 'RRRP3', quantity: 93, price: 28.74 },
            { idAsset: 2, tag: 'ALPA4', quantity: 95, price: 17.98 }
          ];

        before(() => {
            response.status = sinon.stub().returns(response);
            response.json = sinon.stub().returns(servResponse);
            sinon.stub(exchangeService, 'getAll').resolves(servResponse);
        });

        after(() => {
            exchangeService.getAll.restore();
        });

        it('returns with status 200 and with an object', async () => {
            await exchangeController.getAllAssets(request, response);
            
            expect(response.status).to.have.been.calledOnceWith(200);
            expect(response.json).to.have.been.calledOnceWith(sinon.match.array);
            expect(response.json).to.have.been.calledOnceWith(servResponse);

        });
    });

});