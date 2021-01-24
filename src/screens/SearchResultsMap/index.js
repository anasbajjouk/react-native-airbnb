import React, { useState } from 'react'
import { Text, View } from 'react-native'
import { FlatList } from 'react-native-gesture-handler'
import MapView, { Marker, PROVIDER_GOOGLE } from 'react-native-maps'
import useWindowDimensions from 'react-native/Libraries/Utilities/useWindowDimensions'
import places from '../../../assets/data/feed'
import CustomMarker from '../../components/CustomMarker'
import PostCarouselItem from '../../components/PostCarouselItem'

const SearchResultsMap = () => {
  const [selectedPlaceId, setSelectedPlaceId] = useState(null)
  const widthDimension = useWindowDimensions().width
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

      <View style={{ position: 'absolute', bottom: 2 }}>
        <FlatList
          style={{ paddingVertical: 10 }}
          horizontal
          showsHorizontalScrollIndicator={false}
          snapToInterval={widthDimension - 60}
          snapToAlignment={'center'}
          decelerationRate={'fast'}
          data={places}
          renderItem={({ item }) => <PostCarouselItem post={item} />}
        />
      </View>
    </View>
  )
}

export default SearchResultsMap
