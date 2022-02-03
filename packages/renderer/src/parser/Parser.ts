import * as instructions from './Instructions.js';

export function Parse(line: string): instructions.Instruction {
  const ParsedArray = line.split(', ');

  if (ParsedArray.length === 0) {
    return new instructions.InvalidInst();
  }

  if (ParsedArray[0] === 'INIT') {
    return new instructions.Init();
  }

  if (ParsedArray[0] === 'TOWERS') {
    const re = /\(.*?\)/g;
    const EachTowerDetails = line.match(re);
    if (EachTowerDetails) {
      const AllTowers = EachTowerDetails.map(tower => {
        const TowerInfo = tower.replace(/[()]/g, '').split(', ');
        return new instructions.Tower(
          Number(TowerInfo[0]),
          Number(TowerInfo[1]),
          Number(TowerInfo[2]),
          Number(TowerInfo[3]),
          Number(TowerInfo[4]),
        );
      });
      return new instructions.Towers(AllTowers);
    }
  }

  if (ParsedArray[0] === 'TURN') {
    return new instructions.Turn(Number(ParsedArray[1]));
  }

  if (ParsedArray[0] === 'MOVE') {
    return new instructions.Move(
      Number(ParsedArray[1]),
      Number(ParsedArray[2]),
      Number(ParsedArray[3]),
    );
  }

  if (ParsedArray[0] === 'SHOOT') {
    return new instructions.Shoot(
      String(ParsedArray[1]),
      Number(ParsedArray[2]),
      Number(ParsedArray[3]),
      Number(ParsedArray[4]),
    );
  }

  if (ParsedArray[0] === 'SPAWN') {
    return new instructions.Spawn(
      Number(ParsedArray[1]),
      Number(ParsedArray[2]),
      Number(ParsedArray[3]),
      Number(ParsedArray[4]),
      Number(ParsedArray[5]),
    );
  }

  if (ParsedArray[0] === 'DEAD') {
    return new instructions.Dead(
      String(ParsedArray[1]),
      Number(ParsedArray[2]),
    );
  }

  if (ParsedArray[0] === 'PRINT') {
    return new instructions.Print(ParsedArray[1]);
  }

  if (ParsedArray[0] === 'DESTRUCTION') {
    return new instructions.Destruction(
      Number(ParsedArray[1].replace('%', '')),
    );
  }

  if (ParsedArray[0] === 'COINS') {
    return new instructions.Coins(Number(ParsedArray[1]));
  }

  if (ParsedArray[0] === 'ERRORS') {
    return new instructions.Errors(ParsedArray[1]);
  }

  if (ParsedArray[0] === 'END') {
    return new instructions.End();
  }

  return new instructions.InvalidInst();
}
