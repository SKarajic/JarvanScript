import { SummonerMethods } from '.';
import { RegionManager, KeyManager } from '../../managers';
import { Regions } from '../../../enums/';
import { expect } from 'chai';
import 'mocha';

require('dotenv').config();

beforeEach(() => {
    RegionManager.getInstance().setRegion(Regions.EUW);
    KeyManager.getInstance().setKey(<string> process.env.RIOT_API_KEY);
})

describe('SummonerMethods', () => {
    it('should get summoner by account id', (done) => {
        SummonerMethods.getSummonerByAccountId(219406964)
            .then((data) => {
                done();
            })
            .catch((err) => console.log(err));
    })

    it('should get summoner by account id', (done) => {
        SummonerMethods.getSummonerById(69658457)
            .then((data) => {
                done();
            })
            .catch((err) => console.log(err));
    })

    it('should get summoner by account id', (done) => {
        SummonerMethods.getSummonerByName("IAmTheWhite")
            .then((data) => {
                done();
            })
            .catch((err) => console.log(err));
    })
});