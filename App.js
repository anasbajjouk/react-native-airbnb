import React from 'react'
import { FlatList, SafeAreaView, StatusBar } from 'react-native'
import HomeScreen from './src/screens/Home'
import Post from './src/components/Post/index'
import feed from './assets/data/feed'
import SearchResultsScreen from './src/screens/SearchResults'
import DestinationSearchScreen from './src/screens/DestinationSearch'
import GuestsScreen from './src/screens/Guests'

const App = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        {/* <HomeScreen />  */}
        {/* <DestinationSearchScreen /> */}
        <GuestsScreen />
        {/* <SearchResultsScreen /> */}
      </SafeAreaView>
    </>
  )
}

export default App
