import LeagueItem from './leagueitem';
import { AbstractMethodClass } from '../../abstractmethodclass'; 
import { Regions } from '../../../../enums';

export default class LeagueList extends AbstractMethodClass {
    public leagueId: string	
    public tier: string	
    public entries:	Array<LeagueItem>
    public queue: string	
    public name: string

    constructor(requestObject: any, region: Regions) {
        super(region);
        const {
            pleagueId,
            tier,
            entries,
            queue,
            name
        } = requestObject;

        let objectEntries: LeagueItem[] = []
        entries.forEach((entry: any) => {
            objectEntries.push(new LeagueItem(entry, region));
        });
        this.leagueId = pleagueId;
        this.tier = tier;
        this.entries = objectEntries;
        this.queue = queue;
        this.name = name;
    }
}