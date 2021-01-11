import React from 'react'
import { View, Text } from 'react-native'
import { createStackNavigator } from '@react-navigation/stack'
import { NavigationContainer } from '@react-navigation/native'
import DestinationSearchScreen from '../screens/DestinationSearch'
import GuestsScreen from '../screens/Guests'
import SearchResultsScreen from '../screens/SearchResults'
import HomeTabNavigator from './HomeTabNavigator'
import SearchResultsTabNavigator from './SearchResultsTabNavigator'
import HomeScreen from '../screens/Home'

const Stack = createStackNavigator()

const ExploreNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name={'Welcome'}
        component={HomeScreen}
        options={{
          headerShown: false,
        }}
      />

      <Stack.Screen
        name={'SearchResults'}
        component={SearchResultsScreen}
        options={{
          title: 'Search your destination',
        }}
      />
    </Stack.Navigator>
  )
}

export default ExploreNavigator
