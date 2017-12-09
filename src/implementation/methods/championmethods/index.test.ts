import { ChampionMethods } from '.';
import { RegionManager, KeyManager } from '../../managers';
import { Regions } from '../../../enums/';
import { expect } from 'chai';
import 'mocha';

require('dotenv').config();

beforeEach(() => {
    RegionManager.getInstance().setRegion(Regions.EUW);
    KeyManager.getInstance().setKey(<string> process.env.RIOT_API_KEY);
})

describe('ChampionMethods', () => {
    it('should get data of all champions', (done) => {
        ChampionMethods.getChampions()
            .then((data) => {
                done();
            })
            .catch((err) => console.log(err));
    })

    it('should get data of champion with id 7', (done) => {
        ChampionMethods.getChampions(7)
            .then((data) => {
                done();
            })
            .catch((err) => console.log(err));
    })
});