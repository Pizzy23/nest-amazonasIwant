interface Internet {
  Have3G: number;
  Have4G: number;
  Have5G: number;
  Have_Fixed_internet: number;
  No3G: number;
  No4G: number;
  No5G: number;
  No_Fixed_internet: number;
}
export interface ReturnDb {
  idRegion: number;
  RegionName: string;
  PlusCode: string;
  NoInternet: Internet;
}
