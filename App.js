import React from 'react'
import { FlatList, SafeAreaView, StatusBar } from 'react-native'
import HomeScreen from './src/screens/Home'
import Post from './src/components/Post/index'
import feed from './assets/data/feed'
import SearchResultsScreen from './src/screens/SearchResults'

const App = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        {/* <HomeScreen /> 
        {feed.map((f) => (
          <FlatList />
          // <Post />
        ))} */}
        {/* <Post post={feed[3]}/> */}
        <SearchResultsScreen/>
      </SafeAreaView>
    </>
  )
}

export default App
