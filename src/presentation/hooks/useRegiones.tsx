import React, { useEffect, useState } from 'react'
import { RegionEntity } from '../../core/entities/regiones.entity';
import { regionesUseCase } from '../../core/use-cases/banderas/regions.use-case';
import { apiContinentesDb } from '../../config/adapters/banderasDb.adapter';

export const useRegiones = () => {
    const [isLoading, setIsLoading] = useState(true);

    const [region, setRegiones] = useState<RegionEntity[]>([]);

    useEffect(() => {
        initLoad();
    }, []);

    const initLoad = async() => { 

        const regionsPromise = await  regionesUseCase(apiContinentesDb, 'Americas');
    
        const [
            region
        ] = await Promise.all([
            regionsPromise
        ]);

        setRegiones(region);
        setIsLoading(false);
    }
  return {
    isLoading,
    region
  }
}
