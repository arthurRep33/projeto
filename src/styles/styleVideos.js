import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: 40,
    paddingHorizontal: 10,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },
  logo: {
    fontSize: 22,
    fontWeight: 'bold',
    color: 'red',
  },
  headerIcons: {
    flexDirection: 'row',
    gap: 10,
  },
  categorias: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 10,
  },
  categoriaBotao: {
    backgroundColor: '#eee',
    padding: 8,
    borderRadius: 15,
    fontSize: 12,
  },
  videoBox: {
    marginBottom: 15,
  },
  thumbnail: {
    width: '100%',
    height: 180,
    borderRadius: 8,
  },
  videoTitulo: {
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 5,
  },
  videoTempo: {
    position: 'absolute',
    bottom: 10,
    right: 10,
    backgroundColor: '#000',
    color: '#fff',
    paddingHorizontal: 6,
    paddingVertical: 2,
    fontSize: 12,
    borderRadius: 4,
  },
  menu: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: '#eee',
    padding: 10,
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
});
