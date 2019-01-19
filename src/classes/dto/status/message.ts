import JarvanModelInterface from "../../interfaces";
import { Translation } from "./translation";

export class Message implements JarvanModelInterface.Status.Message {
  public readonly severity: string;
  public readonly author: string;
  public readonly createdAt: string;
  public readonly translations: Translation[];
  public readonly updatedAt: string;
  public readonly content: string;
  public readonly id: string;

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
