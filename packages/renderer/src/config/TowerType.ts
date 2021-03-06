export default class TowerType {
  tileId: number;

  name: string;

  asset: string;

  thumbnailAsset: string;

  hp: number;

  range: number;

  price: number;

  constructor(
    tileId: number,
    name: string,
    asset: string,
    thumbnailAsset: string,
    hp: number,
    range: number,
    price: number,
  ) {
    this.tileId = tileId;
    this.name = name;
    this.asset = asset;
    this.thumbnailAsset = thumbnailAsset;
    this.hp = hp;
    this.range = range;
    this.price = price;
  }
}
