import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 20,
    marginHorizontal: 20,
    borderBottomWidth: 1,
    borderColor: 'lightgrey',
  },
  button: {
    borderWidth: 1,
    width: 30,
    height: 30,
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: '#676767',
  },
  adultsText: {
    fontWeight: 'bold',
  },
  ageText: {
    color: '#8d8d8d',
  },
  numberOfPeople: {
    fontSize: 16,
    marginHorizontal: 20,
  },
  signs: {
    fontSize: 20,
    color: '#474747',
  },
})

export default styles
