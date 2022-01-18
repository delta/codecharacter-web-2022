/* eslint-disable max-classes-per-file */
export class Init {}

export class Turn {
  turnNo: number;

  constructor(turnNo: number) {
    this.turnNo = turnNo;
  }
}

export class Tower {
  id: number;

  typeId: number;

  posX: number;

  posY: number;

  hp: number;

  constructor(
    id: number,
    typeId: number,
    posX: number,
    posY: number,
    hp: number,
  ) {
    this.id = id;
    this.typeId = typeId;
    this.posX = posX;
    this.posY = posY;
    this.hp = hp;
  }
}

export class Towers {
  towers: Array<Tower>;

  constructor(towers: Array<Tower>) {
    this.towers = towers;
  }
}

export class Move {
  id: number;

  posX: number;

  posY: number;

  constructor(id: number, posX: number, posY: number) {
    this.id = id;
    this.posX = posX;
    this.posY = posY;
  }
}

export class Shoot {
  target: string;

  id1: number;

  id2: number;

  targetNewHp: number;

  constructor(target: string, id1: number, id2: number, targetNewHp: number) {
    this.target = target;
    this.id1 = id1;
    this.id2 = id2;
    this.targetNewHp = targetNewHp;
  }
}

export class Spawn {
  id: number;

  typeId: number;

  posX: number;

  posY: number;

  hp: number;

  constructor(
    id: number,
    typeId: number,
    posX: number,
    posY: number,
    hp: number,
  ) {
    this.id = id;
    this.typeId = typeId;
    this.posX = posX;
    this.posY = posY;
    this.hp = hp;
  }
}

export class Dead {
  actorType: string;

  id: number;

  constructor(actorType: string, id: number) {
    this.actorType = actorType;
    this.id = id;
  }
}

export class Print {
  message: string;

  constructor(message: string) {
    this.message = message;
  }
}

export class Destruction {
  percent: number;

  constructor(percentage: number) {
    this.percent = percentage;
  }
}

export class Coins {
  coin: number;

  constructor(coin: number) {
    this.coin = coin;
  }
}

export class Errors {
  errorInfo: string;

  constructor(error: string) {
    this.errorInfo = error;
  }
}

export class InvalidInst {}

export class End {}

export type Instruction =
  | Init
  | Turn
  | Towers
  | Move
  | Shoot
  | Spawn
  | Dead
  | Print
  | Destruction
  | Coins
  | Errors
  | InvalidInst
  | End;
