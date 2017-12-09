import { ChampionMasteryMethods } from '.';
import { RegionManager, KeyManager } from '../../managers';
import { Regions } from '../../../enums/';
import { expect } from 'chai';
import 'mocha';

require('dotenv').config();

beforeEach(() => {
    RegionManager.getInstance().setRegion(Regions.EUW);
    KeyManager.getInstance().setKey(<string> process.env.RIOT_API_KEY);
})

describe('ChampionMasteryMethods', () => {
    it('should get champion masteries of summoner', (done) => {
        ChampionMasteryMethods.getChampionMasteries(69658457)
            .then((data) => {
                done();
            })
            .catch((err) => console.log(err));
    })

    it('should get champion masteries of summoner with champion id 7', (done) => {
        ChampionMasteryMethods.getChampionMasteries(69658457, 7)
            .then((data) => {
                done();
            })
            .catch((err) => console.log(err));
    })

    it('should get the total amount of points of summoner', (done) => {
        ChampionMasteryMethods.getChampionMasteryScore(69658457)
            .then((data) => {
                if (typeof data == "number") {
                    done();
                } else {
                    throw new Error('not a number, this is the object: ' + data);
                }
            })
            .catch((err) => console.log(err));
    })
});