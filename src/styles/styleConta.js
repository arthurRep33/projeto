import { StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  textoTitulo:{
    color:'pink',
    fontSize: 30, 
        
    },

  containerConta: { 
     flex: 1,
     paddingTop: 30,
     backgroundColor: '#fff' },


  time: { fontSize: 12 },

  topBar: {
    flexDirection: 'row',
  alignItems: 'center',
  paddingHorizontal: 16, // dá aquele espaço bonito nas laterais
  paddingTop: 16, 
  backgroundColor: '#F83636FF'
  },

  backText: { 
    fontSize: 12, 
    marginLeft: 4 
  },

  topIcons: { 
    flexDirection: 'row' 
  },

  icon: { 
    marginLeft: 10 
  },

  profileContainer: { 
    alignItems: 'center', 
    marginVertical: 10 
  },

  profileImage: { 
    width: 80, 
    height: 80, 
    borderRadius: 40
   },

  name: { 
    fontWeight: 'bold', 
    fontSize: 18 
  },

  username: { 
    fontSize: 14, 
    color: '#000000FF' 
  },
  accountOptions: { 
    marginHorizontal: 20, 
    marginVertical: 10 
  },

  option: { 
    fontSize: 14, 
    marginVertical: 6,
    alignSelf: 'flex-start'
   },

  scroll: { 
    flex: 1, 
    marginHorizontal: 10 
  },

  sectionTitle: { 
    fontWeight: 'bold', 
    fontSize: 16, 
    marginBottom: 10 
  },

  historyGrid: {
    flexDirection: 'row', 
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },

  historyItem: { 
    width: '48%', 
    marginBottom: 10 
  },

  thumbnail: { 
    width: '100%', 
    height: 100, 
    borderRadius: 8 
  },

  historyText: { 
    fontSize: 12, 
    marginTop: 4 
  },

  footer: { 
    padding: 10, 
    borderTopWidth: 1, 
    borderColor: '#eee' 
  },

  menuItem: { 
    fontSize: 14, 
    paddingVertical: 4 
  },

  section: {
  marginTop: 20,
},
  imagem: { 
  width: 100,
  height: 100,
  borderRadius: 50,     // metade da largura/altura pra formar o círculo
  borderWidth: 5,
  borderColor: '#352323FF',  // opcional, pra dar um contorno elegante
  backgroundColor: '#fff', // útil se a imagem tiver transparência
  }

});
