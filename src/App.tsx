import { StatusBar } from 'expo-status-bar';
import { Text, View } from 'react-native';
import estilo from './styles/style';

export default function App() {
  return (
    <View style={estilo.container}>
      <Text> tutui terrô se divertinu </Text>
      <StatusBar style="auto" />
    </View>
  );
}


