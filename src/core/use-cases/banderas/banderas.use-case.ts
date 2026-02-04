import { HttpAdapter } from "../../../config/adapters/http/http.adapter"
import { APIBanderas } from "../../../infrastructure/interfaces/banderas-db.response";
import { BanderasMapper } from "../../../infrastructure/mappers/Banderas.mapper";
import { BanderasEntity } from "../../entities/banderas.entity"
// https://restcountries.com/v3.1/all?fields=name,capital,population,flags
export const banderasAllUseCase = async ( fetch: HttpAdapter): Promise<BanderasEntity[]> => {
    try{
        const data = await fetch.get<APIBanderas[]>('/all');

        return data.map(BanderasMapper.banderasDBToEntity);
    }catch(error){
        throw new Error('Error fetching banderas')
    }
}