import React from 'react'
import 'react-native-gesture-handler'
import { withAuthenticator } from 'aws-amplify-react-native'
import { FlatList, SafeAreaView, StatusBar } from 'react-native'
import HomeScreen from './src/screens/Home'
import Post from './src/components/Post/index'
import feed from './assets/data/feed'
import SearchResultsScreen from './src/screens/SearchResults'
import DestinationSearchScreen from './src/screens/DestinationSearch'
import GuestsScreen from './src/screens/Guests'
import Router from './src/navigation/Router'

const App = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />

      <Router />
    </>
  )
}

export default withAuthenticator(App)
