import React, { use } from 'react'
import { BanderasEntity } from '../../core/entities/banderas.entity';
import { Image, Pressable, StyleSheet, Text, View } from 'react-native';
import { NavigationProp, useNavigation } from '@react-navigation/native'
import { RootStackParams } from '../navigator/Navigator';


interface Props {
  banderas: BanderasEntity[];
  height?: number;
  width?: number;
}

export const BanderasPoster = ({ height = 220, banderas }: Props) => {
  const navigation = useNavigation<NavigationProp<RootStackParams>>();
  return (
    <Pressable
      onPress={() => navigation.navigate('Details', { nameId: banderas.map(b => b.name).join(',') })}
      style={({ pressed }) => ({
        height,
        opacity: pressed ? 0.9 : 1
      })
      }
    >
      <View style={style.imageContainer}>
        
        {
          banderas.map(bandera => (
            <View key={bandera.name} style={{alignItems: 'center'}}>
              <Image
                source={{uri: bandera.flag}}
                style={style.image}
              />
              <Text style={style.text}>{bandera.name}</Text>
            </View>
          ))
        }
      </View>
    </Pressable>
  )
}

const style = StyleSheet.create({
  image:{
    // flex: 1,
    borderRadius: 18,
    width: 365, 
    height: 180, 
    margin:5
  },
  imageContainer:{
    // flex: 1,
    // borderRadius: 18,
    // shadowColor: '#000',
    shadowOffset: {
      width: 0,
      // height: 10,
      height:180,
    },
    shadowOpacity: 0.24,
    shadowRadius: 7,
    elevation: 9,
  },
  text:{
    color: 'black',
    fontSize: 20,
    textAlign: 'center',
  },
});