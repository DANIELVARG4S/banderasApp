import { Image, Pressable, ScrollView, StyleSheet, Text, View } from 'react-native'
import { BanderasEntity } from '../../core/entities/banderas.entity';
import { BanderasPoster } from './BanderasPoster';

interface Props {
  banderas: BanderasEntity[];
  height?: number;
}

export const PosterCarousel = ({ height = 220, banderas }: Props) => {
  return (
    <View style={{ height }}>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
      >
        {banderas.map(bandera => (
          <BanderasPoster
            key={bandera.name}
            banderas={[bandera]}
            height={height}
          />
        ))}
      </ScrollView>
    </View>
  );
};

