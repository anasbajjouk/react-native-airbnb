import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  container: {
    height: 120,
    padding: 5,
  },
  innerContainer: {
    flexDirection: 'row',
    backgroundColor: 'white',
    borderRadius: 10,
    overflow: 'hidden',
  },
  image: {
    height: '100%',
    aspectRatio: 1,
    resizeMode: 'cover',
  },
  bedrooms: {
    marginVertical: 10,
    fontSize: 14,
    color: '#5b5b5b',
  },
  description: {
    fontSize: 18,
    lineHeight: 26,
  },
  prices: { fontSize: 18 },
  oldPrice: {
    color: '#5b5b5b',
    textDecorationLine: 'line-through',
    fontWeight: 'bold',
    opacity: 0.7,
  },
  price: {
    fontWeight: 'bold',
  },
  totalPrice: {
    color: '#5b5b5b',
    textDecorationLine: 'underline',
  },
})

export default styles
