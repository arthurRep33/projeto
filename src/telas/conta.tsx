import React from 'react';
import {
  View,
  Text,
  Image,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import style from '../styles/style';

const Conta: React.FC = () => {
  return (
    <ScrollView style={style.container}>
      {/* TopBar com nome e ícones */}
      <View style={style.topBar}>
        <View style={style.profileContainer}>
          <Image
            source={{ uri: 'https://via.placeholder.com/80' }}
            style={style.profileImage}
          />
          <Text style={style.name}>Ãn Tui Terror</Text>
          <Text style={style.username}>@TuiAmaOruam</Text>
        </View>

        {/* Opções de Conta */}
        <View style={style.accountOptions}>
          <TouchableOpacity>
            <Text style={style.option}>Mudar de Conta</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text style={style.option}>Conta Google</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text style={style.option}>Ativar Guia Anônima</Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* Histórico */}
      <View style={style.section}>
        <Text style={style.sectionTitle}>Histórico</Text>
        <View style={style.historyGrid}>
          {[
            "Neymar 2016/17 👑 Ballon D'Or Level Skills, Goals, Dribbling & Assists",
            'DE MALA E CÚIA EM BEZERROS',
            'APAGÃO EUROPEU: 5 LIÇÕES QUE APRENDI NA DOR',
            'Kevin Levrone training chest and shoulders',
            '2025 Porsche 911 GTS - Sound, Interior and Exterior',
            'ORUAM saind0 NA MÃO com o WESLEY ALEMAO… (LUTA COMPLETA)'
          ].map((title, index) => (
            <View key={index} style={style.historyItem}>
              <Image
                source={{ uri: 'https://via.placeholder.com/150x100' }}
                style={style.thumbnail}
              />
              <Text style={style.historyText}>{title}</Text>
            </View>
          ))}
        </View>
      </View>

      {/* Menu inferior */}
      <View style={style.footer}>
        {[
          'Seu Canal',
          'Seus Videos',
          'Suas Playlists',
          'Videos Curtidos',
          'Assistir Mais Tarde',
        ].map((item, idx) => (
          <TouchableOpacity key={idx}>
            <Text style={style.menuItem}>{item}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </ScrollView>
  );
};

export default Conta;
