import { BattleMediator } from "./BattleMediator";
import { IPlayer } from "./types/IPlayer";

export class Player implements IPlayer {
  id: string;
  hp: number;

  battleMediator: BattleMediator;

  constructor(hp: number, battleMediator: BattleMediator) {
    this.id = Math.random().toString(36).slice(2);
    this.hp = hp;
    this.battleMediator = battleMediator;

    this.battleMediator.addPlayer(this);
  }

  getAttack(): number {
    return Math.random() * 10;
  }
}
