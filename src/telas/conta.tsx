import React from 'react';
import {
  View,
  Text,
  Image,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import estilo from '../styles/styleConta';

export default function Conta (){
  return (
    <View style={estilo.container}>
      {/* TopBar com nome e ícones */}
      <View style={estilo.topBar}>
        <View style={estilo.profileContainer}>
          <Image
            source={{ uri: 'https://via.placeholder.com/80' }}
            style={estilo.profileImage}
          />
          <Text style={estilo.name}>Ãn Tui Terror</Text>
          <Text style={estilo.username}>@TuiAmaOruam</Text>
        </View>

        {/* Opções de Conta */}
        <View style={estilo.accountOptions}>
          <TouchableOpacity>
            <Text style={estilo.option}>Mudar de Conta</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text style={estilo.option}>Conta Google</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text style={estilo.option}>Ativar Guia Anônima</Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* Histórico */}
      <View style={estilo.section}>
        <Text style={estilo.sectionTitle}>Histórico</Text>
        <View style={estilo.historyGrid}>
          {[
            "Neymar 2016/17 👑 Ballon D'Or Level Skills, Goals, Dribbling & Assists",
            'DE MALA E CÚIA EM BEZERROS',
            'APAGÃO EUROPEU: 5 LIÇÕES QUE APRENDI NA DOR',
            'Kevin Levrone training chest and shoulders',
            '2025 Porsche 911 GTS - Sound, Interior and Exterior',
            'ORUAM saind0 NA MÃO com o WESLEY ALEMAO… (LUTA COMPLETA)'
          ].map((title, index) => (
            <View key={index} style={estilo.historyItem}>
              <Image
                source={{ uri: 'https://via.placeholder.com/150x100' }}
                style={estilo.thumbnail}
              />
              <Text style={estilo.historyText}>{title}</Text>
            </View>
          ))}
        </View>
      </View>
      {/* Menu inferior */}
      <View style={estilo.footer}>
        {[
          'Seu Canal',
          'Seus Videos',
          'Suas Playlists',
          'Videos Curtidos',
          'Assistir Mais Tarde',
        ].map((item, idx) => (
          <TouchableOpacity key={idx}>
            <Text style={estilo.menuItem}>{item}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
};



