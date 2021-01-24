import React from 'react'
import { Text, View } from 'react-native'
import { Marker } from 'react-native-maps'

const CustomMarker = ({ coordinate, price, onPress, isSelected }) => {
  return (
    <Marker coordinate={coordinate} onPress={onPress}>
      <View
        style={{
          backgroundColor: isSelected ? 'black' : 'white',
          padding: 5,
          borderRadius: 20,
          borderColor: 'grey',
          borderWidth: 1,
        }}
      >
        <Text
          style={{
            fontWeight: 'bold',
            color: isSelected ? 'white' : 'black',
          }}
        >
          ${price}
        </Text>
      </View>
    </Marker>
  )
}

export default CustomMarker
