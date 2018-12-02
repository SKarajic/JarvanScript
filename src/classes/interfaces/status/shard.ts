import { Service } from "./service";

export interface Shard {
  readonly name: string;
  readonly slug: string;
  readonly locales: string[];
  readonly hostname: string;
  readonly regionTag: string;
  readonly services: Service[];
}
