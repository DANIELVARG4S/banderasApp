import React from 'react'
import { BanderasEntity } from '../../core/entities/banderas.entity';
import { Image, Pressable, StyleSheet, Text, View } from 'react-native';

interface Props {
  banderas: BanderasEntity[];
  height?: number;
  width?: number;
}

export const BanderasPoster = ({ height = 220, banderas }: Props) => {

  return (
    <Pressable
      onPress={() => 'Press'}
      style={({ pressed }) => ({

        // width,
        height,
        // marginHorizontal: 50,
        // paddingBottom: 20,
        // paddingHorizontal: 10,
        opacity: pressed ? 0.9 : 1
      })
      }
    >
      <View style={style.imageContainer}>
        
        {
          banderas.map( bandera => (
            <Image 
              key={bandera.name}
              source={{uri: bandera.flag}}
              // style={{width: 365, height: 165, marginLeft:20}}
              style={style.image}
              >
              </Image>
          ) )
        },
        {
          banderas.map( bandera => (
            <Text style={style.text}>
              {bandera.name}
            </Text>
          ) )
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
    margin:10
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