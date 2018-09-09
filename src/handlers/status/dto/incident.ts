import Message from "./message";

export default class Incident {
  public active: boolean;
  public createdAt: Date;
  public id: number;
  public updates: Message[];

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
