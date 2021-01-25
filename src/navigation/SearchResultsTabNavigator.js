import React from 'react'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs'
import SearchResultsScreen from '../screens/SearchResults'
import SearchResultsMap from '../screens/SearchResultsMap'
import { useRoute } from '@react-navigation/native'

const TopTab = createMaterialTopTabNavigator()

const SearchResultsTabNavigator = () => {
  const route = useRoute()
  const { guests } = route.params

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
        {() => <SearchResultsScreen guests={guests} />}
      </TopTab.Screen>

      <TopTab.Screen name={'map'}>
        {() => <SearchResultsMap guests={guests} />}
      </TopTab.Screen>
    </TopTab.Navigator>
  )
}

export default SearchResultsTabNavigator
