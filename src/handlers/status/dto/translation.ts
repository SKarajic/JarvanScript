export default class Translation {
  public readonly locale: string;
  public readonly content: string;
  public readonly heading: string;

  public constructor(
    locale: string,
    content: string,
    heading: string) {
    this.locale = locale;
    this.content = content;
    this.heading = heading;
  }
}
