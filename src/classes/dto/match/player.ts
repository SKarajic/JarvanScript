import JarvanScript from "../../../jarvanscript";
import JarvanEnum from "../../enums";
import JarvanModelInterface from "../../interfaces";
import { DTO } from "../abstract/index";

export class Player extends DTO implements JarvanModelInterface.Match.Player {
  public accountId: string;
  public platformId: string;
  public summonerId: string;
  public profileIcon: number;
  public summonerName: string;
  public matchHistoryUri: string;
  public currentAccountId: string;
  public currentPlatformId: string;

  public constructor(requestObject: any, region: JarvanEnum.Regions, wrapper: JarvanScript) {
    super(region, wrapper);
    const {
      accountId,
      platformId,
      summonerId,
      profileIcon,
      summonerName,
      matchHistoryUri,
      currentAccountId,
      currentPlatformId,
    } = requestObject;

    this.accountId = accountId;
    this.platformId = platformId;
    this.summonerId = summonerId;
    this.profileIcon = profileIcon;
    this.summonerName = summonerName;
    this.matchHistoryUri = matchHistoryUri;
    this.currentAccountId = currentAccountId;
    this.currentPlatformId = currentPlatformId;
  }
}
