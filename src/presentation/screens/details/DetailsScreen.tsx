import React from 'react'
import { Image, ScrollView, Text, View ,StyleSheet } from 'react-native'
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { CustomView } from '../../components/CustomView'
import { usePais } from '../../hooks/usePais';
import { FullScreenLoader } from '../../loaders/FullScreenLoader';
import { RootStackParams } from '../../navigator/Navigator';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

interface Props extends NativeStackScreenProps<RootStackParams, 'Details'>{};

export const DetailsScreen = ({ route }: Props) => {

  const { top } = useSafeAreaInsets();
  const { nameId } = route.params;
  const { isLoading, pais } = usePais(nameId);

  if (isLoading) {
    return <FullScreenLoader />;
  }

  const country = pais[0];

  if (!country) return null;

  return (
    <CustomView margin>
      <ScrollView>
        <View style={[styles.container, { marginTop: top + 20 }]}>
          
          <Text style={styles.title}>
            {country.name}
          </Text>

          <Image
            source={{ uri: country.flag }}
            style={styles.image}
          />

          <View style={styles.infoContainer}>
            <Text style={styles.text}>
              Capital: {country.capital}
            </Text>

            <Text style={styles.text}>
              Región: {country.region}
            </Text>

            <Text style={styles.text}>
              Población: {country.population.toLocaleString()}
            </Text>
          </View>

        </View>
      </ScrollView>
    </CustomView>
  )
}

const styles = StyleSheet.create({
  container: {
    paddingBottom: 30,
  },
  title:{
    fontSize: 26,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 15,
  },
  image:{
    borderRadius: 18,
    width: '100%',
    height: 200,
    marginBottom: 20,
  },
  infoContainer:{
    paddingHorizontal: 10,
  },
  text:{
    fontSize: 18,
    marginBottom: 8,
  },
});