import { CacheManager } from '.';
import { expect } from 'chai';
import 'mocha';

describe('CacheManager', () => {
    it('should return an instance', () => {
        expect(CacheManager.getInstance()).to.be.an.instanceOf(CacheManager);
    })

    it('should throw an error trying to create a new instance', () => {
        expect(() => new CacheManager()).to.throw('Instantiation failed: Use the getInstance() method instead of new.');
    })
});