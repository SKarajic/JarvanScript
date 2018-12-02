import { Message } from "./message";

export interface Incident {
  readonly active: boolean;
  readonly createdAt: Date;
  readonly id: number;
  readonly updates: Message[];
}