import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import estilo from '../styles/styleHisto';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

type Props = {
  navigation: NativeStackNavigationProp<any>;
};

export default function Historico({ navigation }: Props) {
  const historicoFixo = [
    'Como cozinhar ovo sem panela',
    'Gatos que parecem pão',
    'Teoria do multiverso explicada por memes',
    'Pra que serve o botão "F"?',
    'React vs React Native – diferenças reais',
  ];

  const refazerBusca = (texto: string) => {
    console.log(`Refazendo busca por: ${texto}`);
    // Aqui você pode redirecionar para a tela de resultados ou aplicar filtros
  };

  return (
    <View style={estilo.container}>
        <TouchableOpacity> 
        <Text style={estilo.botao}>Pesquisar no youtube</Text> 
        </TouchableOpacity>

      {historicoFixo.map((item, index) => (
        <TouchableOpacity
          key={index}
          style={estilo.botao}
          onPress={() => refazerBusca(item)}
        >
          <Text style={estilo.textoBotao}>{item}</Text>
        </TouchableOpacity>
      ))}
     

      <TouchableOpacity style={estilo.voltar} onPress={() => navigation.goBack()}>
        <Text style={estilo.voltarTexto}>⬅ Voltar</Text>
      </TouchableOpacity>
    </View>
  );
}
