import { IBattleMediator } from "./types/IBattleMediator";
import { IMonster } from "./types/IMonster";
import { IPlayer } from "./types/IPlayer";

export class BattleMediator implements IBattleMediator {
  playerMap: Map<string, IPlayer> = new Map();
  monsterMap: Map<string, IMonster> = new Map();

  attackPlayer(monsterId: string, playerId: string): void {
    const player = this.playerMap.get(playerId);
    const monster = this.monsterMap.get(monsterId);
    if (player && monster) {
      player.hp -= monster.getAttack();
    }
  }
  attackMonster(playerId: string, monsterId: string): void {
    const player = this.playerMap.get(playerId);
    const monster = this.monsterMap.get(monsterId);
    if (player && monster) {
      monster.hp -= player.getAttack();
    }
  }
  addMonster(monster: IMonster): void {
    this.monsterMap.set(monster.id, monster);
  }
  addPlayer(player: IPlayer): void {
    this.playerMap.set(player.id, player);
  }
}
