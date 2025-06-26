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

  containerConta: { flex: 1, paddingTop: 30, backgroundColor: '#fff' },
  header: {
    flexDirection: 'row', justifyContent: 'space-between',
    paddingHorizontal: 10, alignItems: 'center',
  },
  time: { fontSize: 12 },
  topBar: {
    flexDirection: 'row', justifyContent: 'space-between',
    margin: 10, alignItems: 'center',
  },
  backText: { fontSize: 12, marginLeft: 4 },
  topIcons: { flexDirection: 'row' },
  icon: { marginLeft: 10 },
  profileContainer: { alignItems: 'center', marginVertical: 10 },
  profileImage: { width: 80, height: 80, borderRadius: 40 },
  name: { fontWeight: 'bold', fontSize: 18 },
  username: { fontSize: 14, color: '#777' },
  accountOptions: { marginHorizontal: 20, marginVertical: 10 },
  option: { fontSize: 14, marginVertical: 4 },
  scroll: { flex: 1, marginHorizontal: 10 },
  sectionTitle: { fontWeight: 'bold', fontSize: 16, marginBottom: 10 },
  historyGrid: {
    flexDirection: 'row', flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  historyItem: { width: '48%', marginBottom: 10 },
  thumbnail: { width: '100%', height: 100, borderRadius: 8 },
  historyText: { fontSize: 12, marginTop: 4 },
  footer: { padding: 10, borderTopWidth: 1, borderColor: '#eee' },
  menuItem: { fontSize: 14, paddingVertical: 4 },

  section: {
  marginTop: 20,
},

});
