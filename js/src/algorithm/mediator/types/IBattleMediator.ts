import { IMonster } from "./IMonster";
import { IPlayer } from "./IPlayer";

export interface IBattleMediator {
  attackPlayer(monsterId: string, playerId: string): void;
  attackMonster(playerId: string, monsterId: string): void;
  addMonster(monsterId: IMonster): void;
  addPlayer(playerId: IPlayer): void;
}
