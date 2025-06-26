import React from 'react';
import { View, Image, Text } from 'react-native';
import estilos from '../styles/style_Inicial';

export default function Inicial() {
  return (
      <View style={estilos.logoContainer}>
        <Image
          source={require('../../assets/youtube-logo.png')}
          style={estilos.logoYouTube}
          resizeMode="contain"
        />
      </View>
  );
}
