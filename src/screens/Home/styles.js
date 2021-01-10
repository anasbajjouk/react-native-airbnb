import { StyleSheet, Dimensions } from 'react-native'

const styles = StyleSheet.create({
  image: {
    width: '100%',
    height: 500,
    resizeMode: 'cover',
    justifyContent: 'center',
  },
  title: {
    padding: 25,
    fontSize: 80,
    fontWeight: 'bold',
    color: 'white',
    width: '65%',
  },
  button: {
    backgroundColor: '#fff',
    marginLeft: 25,
    marginTop: 25,
    height: 40,
    width: 200,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: { fontSize: 16, fontWeight: 'bold' },
  searchButton: {
    backgroundColor: '#fff',
    marginHorizontal: 10,
    height: 60,
    width: Dimensions.get('screen').width - 20,
    borderRadius: 30,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    top: 50,
    zIndex: 100
  },
  searchButtonText: { fontSize: 16, fontWeight: 'bold' },
})

export default styles
