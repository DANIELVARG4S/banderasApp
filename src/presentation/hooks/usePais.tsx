import { use, useEffect, useState } from "react";
import { PaisEntity } from "../../core/entities/pais.entity";
import { paisUseCase } from "../../core/use-cases/banderas/pais.use-case";
import { apiPaisDb } from "../../config/adapters/banderasDb.adapter";


export const usePais = (idCountry: string) => {

    const [isLoading, setIsLoading] = useState(true);
    const [pais, setPais] = useState<PaisEntity[]>([]);

    useEffect(() => {
        initLoad();
    }, [idCountry]);

    const initLoad = async() => {

        const paisPromise = await  paisUseCase(apiPaisDb ,idCountry);

        const [
            pais
        ] = await Promise.all([
            paisPromise
        ]);

        setPais(pais);
        
        setIsLoading(false);
    }

    return {
        isLoading,
        pais
    }

};