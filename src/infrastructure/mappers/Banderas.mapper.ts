import { BanderasEntity } from "../../core/entities/banderas.entity";
import { APIBanderas } from "../interfaces/banderas-db.response";

export class BanderasMapper {
    static banderasDBToEntity(banderas : APIBanderas): BanderasEntity{
        return {
            name: banderas.name.common,
            capital: banderas.capital,
            population: banderas.population,
            flag: banderas.flags.png
        }
    }
}