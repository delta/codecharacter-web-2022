/* eslint-disable max-classes-per-file */
export class Init {}

export class Turn {
  TurnNo: Number;

  constructor(TurnNo: Number) {
    this.TurnNo = TurnNo;
  }
}

export class Tower {
  Id: Number;

  TypeId: Number;

  PosX: Number;

  PosY: Number;

  Hp: Number;

  constructor(
    Id: Number,
    TypeId: Number,
    PosX: Number,
    PosY: Number,
    Hp: Number,
  ) {
    this.Hp = Hp;
    this.Id = Id;
    this.PosX = PosX;
    this.PosY = PosY;
    this.TypeId = TypeId;
  }
}

export class Towers {
  towers: Array<Tower>;

  constructor(towers: Array<Tower>) {
    this.towers = towers;
  }
}

export class Move {
  Id: Number;

  PosX: Number;

  PosY: Number;

  constructor(Id: Number, PosX: Number, PosY: Number) {
    this.Id = Id;
    this.PosX = PosX;
    this.PosY = PosY;
  }
}

export class Shoot {
  Id1: Number;

  Id2: Number;

  TargetNewHp: Number;

  constructor(Id1: Number, Id2: Number, NewHp: Number) {
    this.Id1 = Id1;
    this.Id2 = Id2;
    this.TargetNewHp = NewHp;
  }
}

export class Spawn {
  Id: Number;

  TypeId: Number;

  PosX: Number;

  PosY: Number;

  Hp: Number;

  constructor(
    Id: Number,
    TypeId: Number,
    PosX: Number,
    PosY: Number,
    Hp: Number,
  ) {
    this.Id = Id;
    this.TypeId = TypeId;
    this.PosX = PosX;
    this.PosY = PosY;
    this.Hp = Hp;
  }
}

export class Dead {
  Id: Number;

  constructor(Id: Number) {
    this.Id = Id;
  }
}

export class Print {
  Message: String;

  constructor(Message: String) {
    this.Message = Message;
  }
}

export class Destruction {
  Percent: Number;

  constructor(Percentage: Number) {
    this.Percent = Percentage;
  }
}

export class Coins {
  Coin: Number;

  constructor(Coin: Number) {
    this.Coin = Coin;
  }
}

export class Errors {
  ErrorInfo: String;

  constructor(Error: String) {
    this.ErrorInfo = Error;
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
