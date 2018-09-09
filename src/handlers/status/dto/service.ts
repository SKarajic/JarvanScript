import Incident from "./incident";

export default class Service {
  public status: string;
  public incidents: Incident[];
  public name: string;
  public slug: string;

  constructor(
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
