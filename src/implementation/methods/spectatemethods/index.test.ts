import { SpectateMethods } from '.';
import { RegionManager, KeyManager } from '../../managers';
import { Regions } from '../../../enums/';
import { expect } from 'chai';
import 'mocha';

require('dotenv').config();

beforeEach(() => {
    RegionManager.getInstance().setRegion(Regions.EUW);
    KeyManager.getInstance().setKey(<string> process.env.RIOT_API_KEY);
})

describe('SpectateMethods', () => {
    it('should get spectator data of a summoner', (done) => {
        SpectateMethods.spectateMatch(69658457)
            .then((data) => {
                done();
            })
            .catch((err) => console.log(err));
    })

    it('should get featured matches', (done) => {
        SpectateMethods.featuredMatches()
            .then((data) => {
                done();
            })
            .catch((err) => console.log(err));
    })
});