import React, {useEffect} from 'react';
import { View, Image,} from 'react-native';
import estilos from '../styles/style_Inicial';

export default function Inicial(props: any) {

  const navigation = props.navigation;
  useEffect(() => {
    const timer = setTimeout(() => {
      navigation.replace('Home'); // troca para a próxima tela (Home, Conta, etc.)
    }, 3000); // tempo em ms
    return () => clearTimeout(timer);
  }, []);

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
