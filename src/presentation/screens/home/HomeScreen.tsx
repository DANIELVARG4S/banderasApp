import React from 'react'
import { ScrollView, Text, View } from 'react-native'
import { CustomView } from '../../components/CustomView'
import { useBanderas } from '../../hooks/useBanderas';
import { PosterCarousel } from '../../banderas/PosterCarousel';
import { FullScreenLoader } from '../../loaders/FullScreenLoader';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { RegionesCarousel } from '../../banderas/RegionesCarousel';
import { useRegiones } from '../../hooks/useRegiones';

export const HomeScreen = () => {

  const { top } = useSafeAreaInsets();

  const { isLoading, bandera } = useBanderas();

  const {  region } = useRegiones();
  // console.log(regiones);

  if (isLoading) {
    return <FullScreenLoader />;
  }

  // console.log(bandera.forEach(element => {
  //   console.log(element);
  // } ));
  // ejemplo básico de paginación en frontend
  // const pageSize = 20;
  // const page = 2; // segunda página
  // const paginated = allCountries.slice(page * pageSize, (page + 1) * pageSize);

  return (
    <CustomView  margin>
      <ScrollView>
        <View style={{marginTop: top + 25, paddingBottom: 20}}>
          <Text style={{fontSize: 30, fontWeight: 'bold', color: 'black', textAlign: 'center'}}>Banderas del Mundo</Text>
          {/* Principal */}
            <PosterCarousel 
            banderas ={bandera}
            />
            {/* Regiones */}
            <Text style={{fontSize: 25, fontWeight: 'bold', color: 'black', marginTop:20, marginBottom:10}}>Continentes</Text>
            <RegionesCarousel
              regions={region}
            />
        </View>
      </ScrollView>
    </CustomView>
  )
}
