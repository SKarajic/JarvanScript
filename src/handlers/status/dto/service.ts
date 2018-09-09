import Incident from "./incident";

export default class Service {
  public readonly status: string;
  public readonly incidents: Incident[];
  public readonly name: string;
  public readonly slug: string;

  public constructor(
    status: string,
    incidents: Incident[],
    name: string,
    slug: string) {
    this.status = status;
    this.incidents = incidents;
    this.name = name;
    this.slug = slug;
  }
}
