import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
    padding: 10,
    marginTop: 70
  },

  titulo: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#000',
  },

  pesquisa: {
    backgroundColor: '#e6e6e6',
    padding: 15,
    marginBottom: 10,
    borderRadius: 10,
    elevation: 2, // leve sombra pra parecer botão
  },

  botao: {
    backgroundColor: '#e6e6e6',
    padding: 15,
    marginBottom: 10,
    borderRadius: 10,
    elevation: 2, // leve sombra pra parecer botão
  },

  textoBotao: {
    fontSize: 16,
    color: '#333',
  },

  voltar: {
    marginTop: 30,
    alignItems: 'center',
  },

  voltarTexto: {
    fontSize: 16,
    color: '#1f6feb',
    fontWeight: '500',
  }
});