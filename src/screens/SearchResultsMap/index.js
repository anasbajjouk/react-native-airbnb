import { API, graphqlOperation } from 'aws-amplify'
import React, { useEffect, useRef, useState } from 'react'
import { Text, View } from 'react-native'
import { FlatList } from 'react-native-gesture-handler'
import MapView, { Marker, PROVIDER_GOOGLE } from 'react-native-maps'
import useWindowDimensions from 'react-native/Libraries/Utilities/useWindowDimensions'
import { listPostss } from '../../../graphql/queries'
import CustomMarker from '../../components/CustomMarker'
import PostCarouselItem from '../../components/PostCarouselItem'

const SearchResultsMap = () => {
  const [posts, setPosts] = useState([])
  const [selectedPlaceId, setSelectedPlaceId] = useState(null)
  const widthDimension = useWindowDimensions().width

  const flatListRef = useRef(null)
  const mapRef = useRef(null)
  const viewConfig = useRef({ itemVisiblePercentThreshold: 70 })

  const onViewChanged = useRef(({ viewableItems }) => {
    if (viewableItems.length > 0) {
      const selectedPlace = viewableItems[0].item
      setSelectedPlaceId(selectedPlace.id)
    }
  })

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const postsResult = await API.graphql(graphqlOperation(listPostss))
        setPosts(postsResult?.data?.listPostss?.items)
      } catch (error) {
        console.error(error)
      }
    }
    fetchPosts()
  }, [])

  useEffect(() => {
    if (!selectedPlaceId || !flatListRef) return

    const index = posts.findIndex((place) => place.id === selectedPlaceId)
    flatListRef.current.scrollToIndex({ index })

    const selectedPlace = posts[index]
    const region = {
      latitude: selectedPlace.latitude,
      longitude: selectedPlace.longitude,
      latitudeDelta: 1,
      longitudeDelta: 1,
    }

    mapRef.current.animateToRegion(region)
  }, [selectedPlaceId])

  return (
    <View style={{ width: '100%', height: '100%' }}>
      <MapView
        ref={mapRef}
        provider={PROVIDER_GOOGLE}
        style={{ width: '100%', height: '100%' }}
        initialRegion={{
          latitude: 28.3279822,
          longitude: -16.5124847,
          latitudeDelta: 0.8,
          longitudeDelta: 0.8,
        }}
      >
        {posts.map((place) => (
          <CustomMarker
            isSelected={place.id === selectedPlaceId}
            coordinate={{
              latitude: place.latitude,
              longitude: place.longitude,
            }}
            price={place.newPrice}
            onPress={() => setSelectedPlaceId(place.id)}
          />
        ))}
      </MapView>

      <View style={{ position: 'absolute', bottom: 2 }}>
        <FlatList
          ref={flatListRef}
          style={{ paddingVertical: 10 }}
          horizontal
          showsHorizontalScrollIndicator={false}
          snapToInterval={widthDimension - 60}
          snapToAlignment={'center'}
          decelerationRate={'fast'}
          data={posts}
          renderItem={({ item }) => <PostCarouselItem post={item} />}
          viewabilityConfig={viewConfig.current}
          onViewableItemsChanged={onViewChanged.current}
          // keyExtractor={({ item }) => item.id}
        />
      </View>
    </View>
  )
}

export default SearchResultsMap
