import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  container: {
    margin: 20,
  },
  image: {
    width: '100%',
    aspectRatio: 3 / 2,
    resizeMode: 'cover',
    borderRadius: 10,
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
  longDescription: {
    fontSize: 18,
    lineHeight: 24,
    marginVertical: 20,
    textAlign: 'justify',
  },
})

export default styles
