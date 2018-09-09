import Translation from "./translation";

export default class Message {
  public severity: string;
  public author: string;
  public createdAt: string;
  public translations: Translation[];
  public updatedAt: string;
  public content: string;
  public id: string;

  public constructor(
    id: string,
    author: string,
    content: string,
    severity: string,
    createdAt: string,
    updatedAt: string,
    translations: Translation[]) {
    this.severity = severity;
    this.author = author;
    this.createdAt = createdAt;
    this.translations = translations;
    this.updatedAt = updatedAt;
    this.content = content;
    this.id = id;
  }
}
