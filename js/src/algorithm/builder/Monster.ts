class Monster {
  private _name: string;
  private _health: number;
  private _attack: number;
  private _defense: number;
  private _speed: number;

  constructor() {
    this._name = "";
    this._health = 0;
    this._attack = 0;
    this._defense = 0;
    this._speed = 0;
  }

  set name(name: string) {
    this._name = name;
  }

  set health(health: number) {
    this._health = health;
  }

  set attack(attack: number) {
    this._attack = attack;
  }

  set defense(defense: number) {
    this._defense = defense;
  }

  set speed(speed: number) {
    this._speed = speed;
  }

  get name() {
    return this._name;
  }

  get health() {
    return this._health;
  }

  get attack() {
    return this._attack;
  }

  get defense() {
    return this._defense;
  }

  get speed() {
    return this._speed;
  }
}

export default Monster;
