import { HttpAdapter } from "../../../config/adapters/http/http.adapter";
import { RegionAPI } from "../../../infrastructure/interfaces/regions-db.response";
import { RegionesMapper } from "../../../infrastructure/mappers/Regiones.mapper";
import { BanderasEntity } from "../../entities/banderas.entity";
import { RegionEntity } from "../../entities/regiones.entity";

export const regionesUseCase = async ( fetch: HttpAdapter, region : string): Promise<RegionEntity[]>=> {   
    try{
        // Africa, Americas, Asia, Europe, Oceania
        const regions = await fetch.get<RegionAPI[]>(`/region/${region}`);
        
        
        // console.log(regions);
        // return RegionesMapper.regionDBToEntity(regions);
        // return regions.continents.map(RegionesMapper.regionDBToEntity);
        // return RegionesMapper.regionesDBToEntity(regions.map(r => r.region));
        return regions.map(RegionesMapper.regionDBToEntity);

    }
    catch(error){
        throw new Error('Error fetching regiones')
    }
}