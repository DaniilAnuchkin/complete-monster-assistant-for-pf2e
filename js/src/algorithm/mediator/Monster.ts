import { BattleMediator } from "./BattleMediator";
import { IMonster } from "./types/IMonster";

// Дублирует функционал класса PLayer, но я разделил их тк потом можно отдельно каждый класс расширить и добавить уникальные вещи (так же они могут наследоваться от какоко-нибудь класса Creature)
export class Monster implements IMonster {
  id: string;
  hp: number;

  battleMediator: BattleMediator;

  constructor(hp: number, battleMediator: BattleMediator) {
    this.id = Math.random().toString(36).slice(2);
    this.hp = hp;
    this.battleMediator = battleMediator;

    this.battleMediator.addMonster(this);
  }

  getAttack(): number {
    return Math.random() * 10;
  }
}
