import { MatchMethods } from '.';
import { RegionManager, KeyManager } from '../../managers';
import { Regions } from '../../../enums/';
import { expect } from 'chai';
import 'mocha';

require('dotenv').config();

beforeEach(() => {
    RegionManager.getInstance().setRegion(Regions.EUW);
    KeyManager.getInstance().setKey(<string> process.env.RIOT_API_KEY);
})

describe('MatchMethods', () => {
    it('should get matchlist of summoner', (done) => {
        MatchMethods.getMatchList(219406964)
            .then((data) => {
                done();
            })
            .catch((err) => console.log(err));
    })

    it('should get recent matchlist of summoner', (done) => {
        MatchMethods.getMatchList(219406964, true)
            .then((data) => {
                done();
            })
            .catch((err) => console.log(err));
    })

    it('should get match info of one of the matches of summoner', (done) => {
        MatchMethods.getMatchList(219406964, true)
            .then((data) => MatchMethods.getMatchInfo(data.matches[0].gameId))
            .then((data) => {
                done();
            })
            .catch((err) => console.log(err));
    })

    it('should get match timeline of one of the matches of summoner', (done) => {
        MatchMethods.getMatchList(219406964, true)
            .then((data) => MatchMethods.getMatchTimeline(data.matches[0].gameId))
            .then((data) => {
                done();
            })
            .catch((err) => console.log(err));
    })
});