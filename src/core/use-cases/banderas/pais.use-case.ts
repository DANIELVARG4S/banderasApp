import { HttpAdapter } from "../../../config/adapters/http/http.adapter";
import { PaisResponse } from "../../../infrastructure/interfaces/pais-db.response";
import { PaisMapper } from "../../../infrastructure/mappers/Pais.mapper";
import { PaisEntity } from "../../entities/pais.entity";

export const paisUseCase = async ( fetch: HttpAdapter, name : string): Promise<PaisEntity[]>=> {

    try{
        const paises = await fetch.get<PaisResponse[]>(`/name/${name}`);
        
        return paises.map(PaisMapper.paisDBToEntity);
        
    }
    catch(error){
        throw new Error('Error fetching paises')
    }

}