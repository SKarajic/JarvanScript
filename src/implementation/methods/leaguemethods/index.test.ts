import { LeagueMethods } from '.';
import { RegionManager, KeyManager } from '../../managers';
import { Regions } from '../../../enums/';
import { expect } from 'chai';
import 'mocha';

require('dotenv').config();

beforeEach(() => {
    RegionManager.getInstance().setRegion(Regions.EUW);
    KeyManager.getInstance().setKey(<string> process.env.RIOT_API_KEY);
})

describe('LeagueMethods', () => {
    it('should get the challenger solo queue league', async () => {
        try {
            const ladder = await LeagueMethods.getChallengerLeague('RANKED_SOLO_5x5');
            expect(ladder.name).to.be.a('string');
        }
        catch(err) {
            console.log(err);
        }
    })

    it('should get the master solo queue league', async () => {
        try {
            const ladder = await LeagueMethods.getMasterLeague('RANKED_SOLO_5x5');
            expect(ladder.name).to.be.a('string');
        }
        catch(err) {
            console.log(err);
        }
    })

    it('should get the ranks of a summoner', (done) => {
        LeagueMethods.getRanks(69658457)
            .then((data) => {
                done();
            })
            .catch((err) => console.log(err));
    })
    
    it('should get the league of a summoner', (done) => {
        LeagueMethods.getRanks(69658457)
            .then((data) => {
                return LeagueMethods.getLeague(data[0].leagueId);
            })
            .then((data) => {
                done();
            })
            .catch((err) => console.log(err));
    })
});