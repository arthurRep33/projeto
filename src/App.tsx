import { StatusBar } from 'expo-status-bar';
import { Text, View } from 'react-native';
import estilo from './styles/style';

export default function App() {
  return (
    <View style={estilo.container}>
      <Text> porra</Text>
      <StatusBar style="auto" />
    </View>
  );
}


