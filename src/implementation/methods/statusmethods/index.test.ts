import { StatusMethods } from '.';
import { RegionManager, KeyManager } from '../../managers';
import { Regions } from '../../../enums/';
import { expect } from 'chai';
import 'mocha';

require('dotenv').config();

beforeEach(() => {
    RegionManager.getInstance().setRegion(Regions.EUW);
    KeyManager.getInstance().setKey(<string> process.env.RIOT_API_KEY);
})

describe('StatusMethods', () => {
    it('should get status', (done) => {
        StatusMethods.getStatus()
            .then((data) => {
                done();
            })
            .catch((err) => console.log(err));
    })
});