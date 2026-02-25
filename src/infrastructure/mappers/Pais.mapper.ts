import { PaisEntity } from "../../core/entities/pais.entity";
import { PaisResponse } from "../interfaces/pais-db.response";

export class PaisMapper {
    static paisDBToEntity(info: PaisResponse): PaisEntity {
        return {
            name: info.name.common,
            capital: info.capital,
            population: info.population,
            flag: info.flags.png,
            region: info.region
        };  
    }
}
