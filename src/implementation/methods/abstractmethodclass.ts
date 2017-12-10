import { Regions } from "../../enums";

export abstract class AbstractMethodClass {

    protected region: Regions;

    constructor(region: any) {
        this.region = <Regions> region;
    } 

    toJSON() {
        let copy = Object.assign({}, this, {region: null});
    }
}