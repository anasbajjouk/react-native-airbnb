import React, { useState } from 'react'
import { Text, View } from 'react-native'
import MapView, { Marker, PROVIDER_GOOGLE } from 'react-native-maps'
import places from '../../../assets/data/feed'
import CustomMarker from '../../components/CustomMarker'

const SearchResultsMap = () => {
  const [selectedPlaceId, setSelectedPlaceId] = useState(null)

  return (
    <View style={{ width: '100%', height: '100%' }}>
      <MapView
        provider={PROVIDER_GOOGLE}
        style={{ width: '100%', height: '100%' }}
        initialRegion={{
          latitude: 28.3279822,
          longitude: -16.5124847,
          latitudeDelta: 0.8,
          longitudeDelta: 1.8,
        }}
      >
        {places.map((place) => (
          <CustomMarker
            isSelected={place.id === selectedPlaceId}
            coordinate={place.coordinate}
            price={place.newPrice}
            onPress={() => setSelectedPlaceId(place.id)}
          />
        ))}
      </MapView>
    </View>
  )
}

export default SearchResultsMap
