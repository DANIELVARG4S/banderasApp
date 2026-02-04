export interface RegionEntity {
  name: string;
  capital: string[];
  population: number;
  flag: string;
  region: RegionsEntity;
}

export enum RegionsEntity {
  Asia = "Asia",
  Europe = "Europe",
  Africa = "Africa",
  Americas = "Americas",
  Oceania = "Oceania",
}
