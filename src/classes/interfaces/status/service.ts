import { Incident } from "./incident";

export interface Service {
  readonly status: string;
  readonly incidents: Incident[];
  readonly name: string;
  readonly slug: string;
}
