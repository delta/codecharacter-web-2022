export default class Tower {
  tileId: number;

  name: string;

  asset: string;

  thumbnailAsset: string;

  price: number;

  constructor(
    tileId: number,
    name: string,
    asset: string,
    thumbnailAsset: string,
    price: number,
  ) {
    this.tileId = tileId;
    this.name = name;
    this.asset = asset;
    this.thumbnailAsset = thumbnailAsset;
    this.price = price;
  }
}
