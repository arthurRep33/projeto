// src/App.tsx
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// Importar suas telas
import Videos from './telas/videos';
import Conta from './telas/conta'; // crie essa tela depois

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Videos} />
        <Stack.Screen name="Perfil" component={Conta} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
