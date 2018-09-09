export default class Translation {
  public locale: string;
  public content: string;
  public heading: string;

  constructor(
    locale: string,
    content: string,
    heading: string) {
    this.locale = locale;
    this.content = content;
    this.heading = heading;
  }
}
