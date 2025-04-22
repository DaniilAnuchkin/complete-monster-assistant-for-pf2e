import Monster from "./Monster";
import { IMonsterBuilder } from "./types/IMonsterBuilder";

class MonsterBuilder implements IMonsterBuilder {
  private _monster: Monster;
  constructor() {
    this._monster = new Monster();
  }

  setName(name: string): IMonsterBuilder {
    this._monster.name = name;
    return this;
  }
  setHealth(health: number): IMonsterBuilder {
    this._monster.health = health;
    return this;
  }
  setAttack(attack: number): IMonsterBuilder {
    this._monster.attack = attack;
    return this;
  }
  setDefense(defense: number): IMonsterBuilder {
    this._monster.defense = defense;
    return this;
  }
  setSpeed(speed: number): IMonsterBuilder {
    this._monster.speed = speed;
    return this;
  }
  build(): Monster {
    return this._monster;
  }
}
