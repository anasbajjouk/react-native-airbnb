import React from 'react'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs'
import SearchResultsScreen from '../screens/SearchResults'
import SearchResultsMap from '../screens/SearchResultsMap'
import { useRoute } from '@react-navigation/native'
import { useState } from 'react'
import { useEffect } from 'react'
import { API, graphqlOperation } from 'aws-amplify'
import { listPostss } from '../../graphql/queries'

const TopTab = createMaterialTopTabNavigator()

const SearchResultsTabNavigator = () => {
  const route = useRoute()
  const { guests, viewport } = route.params

  const [posts, setPosts] = useState([])

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const postsResult = await API.graphql(
          graphqlOperation(listPostss, {
            filter: {
              and: {
                maxGuests: { ge: guests },
                latitude: {
                  between: [viewport.southwest.lat, viewport.northeast.lat],
                },
                longitude: {
                  between: [viewport.southwest.lng, viewport.northeast.lng],
                },
              },
            },
          })
        )
        setPosts(postsResult?.data?.listPostss?.items)
      } catch (error) {
        console.error(error)
      }
    }
    fetchPosts()
  }, [])

  return (
    <TopTab.Navigator
      tabBarOptions={{
        activeTintColor: '#f15454',
        indicatorStyle: {
          backgroundColor: '#f15454',
        },
      }}
    >
      <TopTab.Screen name={'list'}>
        {() => <SearchResultsScreen posts={posts} />}
      </TopTab.Screen>

      <TopTab.Screen name={'map'}>
        {() => <SearchResultsMap posts={posts} />}
      </TopTab.Screen>
    </TopTab.Navigator>
  )
}

export default SearchResultsTabNavigator
