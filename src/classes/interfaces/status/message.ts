import { Translation } from "./translation";

export interface Message {
  readonly severity: string;
  readonly author: string;
  readonly createdAt: string;
  readonly translations: Translation[];
  readonly updatedAt: string;
  readonly content: string;
  readonly id: string;
}
