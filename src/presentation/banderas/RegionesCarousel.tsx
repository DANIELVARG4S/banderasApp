import React from 'react'
import { ScrollView, Text, View } from 'react-native'
import { RegionEntity } from '../../core/entities/regiones.entity';
import { BanderasPoster } from './BanderasPoster';

interface Props {
  regions: RegionEntity[];
  height?: number;
}

export const RegionesCarousel = ({height = 200, regions }: Props) => {
  return (
    <ScrollView
      horizontal={true}
      showsHorizontalScrollIndicator={false}
    >

      {
      
        regions.map( region => (
          <BanderasPoster 
            key={region.name}
            banderas={[region]}
          />
          
        ) )
                
      }
    </ScrollView>
  )
}
