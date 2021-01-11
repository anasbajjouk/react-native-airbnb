import React from 'react'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs'
import SearchResultsScreen from '../screens/SearchResults'

const TopTab = createMaterialTopTabNavigator()

const SearchResultsTabNavigator = () => {
  return (
    <TopTab.Navigator
      tabBarOptions={{
        activeTintColor: '#f15454',
        indicatorStyle: {
          backgroundColor: '#f15454',
        },
      }}
    >
      <TopTab.Screen name={'list'} component={SearchResultsScreen} />
      <TopTab.Screen name={'map'} component={SearchResultsScreen} />
    </TopTab.Navigator>
  )
}

export default SearchResultsTabNavigator
