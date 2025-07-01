import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import estilo from '../styles/styleVideos';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

type RootStackParamList = {
  Home: undefined;
  Perfil: undefined;
};  

type Props = {
  navigation: any;
};


export default function Videos({navigation}:Props) {
  return (
    <View style={estilo.container}>
      {/* Cabeçalho */}
      <View style={estilo.header}>
        <Text style={estilo.logo}>YouTube</Text>
        <View style={estilo.headerIcons}>
          <Image
            source={require('../../assets/noti.png')} style={estilo.icons}
          />
          <Text style={estilo.accountButton} >🔔</Text>
          <TouchableOpacity onPress={() => navigation.navigate('Perfil')}>
            <Image
                       source={require('../../assets/oruam.jpg')} style={estilo.pfp}
                     />
          </TouchableOpacity>
        </View>
      </View>

      {/* Categorias */}
      <View style={estilo.categorias}>
        <Text style={estilo.categoriaBotao}>Tudo</Text>
        <Text style={estilo.categoriaBotao}>Novidades</Text>
        <Text style={estilo.categoriaBotao}>Jogos</Text>
        <Text style={estilo.categoriaBotao}>Ao Vivo</Text>
      </View>

      {/* Vídeo 1 */}
      <View style={estilo.videoBox}>
        <Image
          source={{ uri: 'https://i.ytimg.com/vi/Ro_MpXJzpt0/maxresdefault.jpg' }}
          style={estilo.thumbnail}
        />
        <Text style={estilo.videoTitulo}>Neymar Skills e Gols</Text>
        <Text style={estilo.videoTempo}>15:12</Text>
      </View>

      {/* Vídeo 2 */}
      <View style={estilo.videoBox}>
        <Image
          source={{ uri: 'https://i.ytimg.com/vi/nzRy5ld6opY/maxresdefault.jpg' }}
          style={estilo.thumbnail}
        />
        <Text style={estilo.videoTitulo}>De Mala e Cuia</Text>
        <Text style={estilo.videoTempo}>15:43</Text>
      </View>

      {/* Menu inferior */}
      <View style={estilo.menu}>
        <Text>🏠 Home</Text>
        <Text>🎬 Shorts</Text>
        <Text>➕</Text>
        <Text>📺 Inscrições</Text>
        <Text>📚 Biblioteca</Text>
      </View>
    </View>
  );
}
