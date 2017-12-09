import { KeyManager } from '.';
import { expect } from 'chai';
import 'mocha';

describe('KeyManager', () => {
    it('should return an instance', () => {
        expect(KeyManager.getInstance()).to.be.an.instanceOf(KeyManager);
    })

    it('should throw an error trying to create a new instance', () => {
        expect(() => new KeyManager()).to.throw('Instantiation failed: Use the getInstance() method instead of new.');
    })

    it('should get and set the Riot API key', () => {
        const km = KeyManager.getInstance();
        km.setKey('abcd');

        expect(km.getKey()).to.equal('abcd');
    })
});