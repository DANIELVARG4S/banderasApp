import { use, useEffect, useState } from "react";
import { banderasAllUseCase } from "../../core/use-cases/banderas/banderas.use-case";
import { apiBanderasDb } from "../../config/adapters/banderasDb.adapter";
import { BanderasEntity } from '../../core/entities/banderas.entity';

export const useBanderas = () => {

    const [isLoading, setIsLoading] = useState(true);
    const [bandera, setBandera] = useState<BanderasEntity[]>([]);


    useEffect(() => {
        initLoad();
    }, []);

    const initLoad = async() => { 
        const banderasAllPromise = await banderasAllUseCase(apiBanderasDb);
        const [
            bandera
        ] = await Promise.all([
            banderasAllPromise
        ]);

        setBandera(bandera);
        setIsLoading(false);
    }

    return {
        isLoading,
        bandera
    }
    
}
