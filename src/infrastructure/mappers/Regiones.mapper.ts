
import {  RegionEntity, RegionsEntity } from "../../core/entities/regiones.entity";
import { Region, RegionAPI } from '../interfaces/regions-db.response';

export class RegionesMapper {
  static regionDBToEntity(info: RegionAPI): RegionEntity {
    return {
       name: info.name.common,
        capital: info.capital,
        population: info.population,
        flag: info.flags.png,
        region: info.region as unknown as RegionsEntity
    };
    
  }

  // static regionesDBToEntity(regiones: string[]): RegionEntity[] {
    
  //   return regiones.map(
  //     (region) => this.regionDBToEntity(region)
      
  //   );
  // }
}