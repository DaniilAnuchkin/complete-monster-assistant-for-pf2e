import Monster from "../Monster";

export interface IMonsterBuilder {
  setName(name: string): IMonsterBuilder;
  setHealth(health: number): IMonsterBuilder;
  setAttack(attack: number): IMonsterBuilder;
  setDefense(defense: number): IMonsterBuilder;
  setSpeed(speed: number): IMonsterBuilder;
  build(): Monster;
}
