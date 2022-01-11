import * as Instr from './instruction.js';

export function Parse(line: String): Instr.Instruction {
  const ParsedArray = line.split(', ');

  if (ParsedArray.length === 0) {
    return new Instr.InvalidInst();
  }

  if (ParsedArray[0] === 'INIT') {
    return new Instr.Init();
  }

  if (ParsedArray[0] === 'TOWERS') {
    const re = /\(.*?\)/g;
    const EachTowerDetails = line.match(re);
    if (EachTowerDetails) {
      const AllTowers = EachTowerDetails.map(tower => {
        const TowerInfo = tower.replace(/[()]/g, '').split(', ');
        return new Instr.Tower(
          Number(TowerInfo[0]),
          Number(TowerInfo[1]),
          Number(TowerInfo[2]),
          Number(TowerInfo[3]),
          Number(TowerInfo[4]),
        );
      });
      return new Instr.Towers(AllTowers);
    }
  }

  if (ParsedArray[0] === 'TURN') {
    return new Instr.Turn(Number(ParsedArray[1]));
  }

  if (ParsedArray[0] === 'MOVE') {
    return new Instr.Move(
      Number(ParsedArray[1]),
      Number(ParsedArray[2]),
      Number(ParsedArray[3]),
    );
  }

  if (ParsedArray[0] === 'SHOOT') {
    return new Instr.Shoot(
      Number(ParsedArray[1]),
      Number(ParsedArray[2]),
      Number(ParsedArray[3]),
    );
  }

  if (ParsedArray[0] === 'SPAWN') {
    return new Instr.Spawn(
      Number(ParsedArray[1]),
      Number(ParsedArray[2]),
      Number(ParsedArray[3]),
      Number(ParsedArray[4]),
      Number(ParsedArray[5]),
    );
  }

  if (ParsedArray[0] === 'DEAD') {
    return new Instr.Dead(Number(ParsedArray[1]));
  }

  if (ParsedArray[0] === 'PRINT') {
    return new Instr.Print(ParsedArray[1]);
  }

  if (ParsedArray[0] === 'DESTRUCTION') {
    return new Instr.Destruction(Number(ParsedArray[1].replace('%', '')));
  }

  if (ParsedArray[0] === 'COINS') {
    return new Instr.Coins(Number(ParsedArray[1]));
  }

  if (ParsedArray[0] === 'ERRORS') {
    return new Instr.Errors(ParsedArray[1]);
  }

  if (ParsedArray[0] === 'END') {
    return new Instr.End();
  }

  return new Instr.InvalidInst();
}
