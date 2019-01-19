import JarvanModelInterface from "../../interfaces";
import { Message } from "./message";

export class Incident implements JarvanModelInterface.Status.Incident {
  public readonly active: boolean;
  public readonly createdAt: Date;
  public readonly id: number;
  public readonly updates: Message[];

  public constructor(
    id: number,
    active: boolean,
    createdAt: Date,
    updates: Message[]) {
    this.id = id;
    this.active = active;
    this.createdAt = createdAt;
    this.updates = updates;
  }
}
