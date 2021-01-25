import { useRoute } from '@react-navigation/native'
import { API, graphqlOperation } from 'aws-amplify'
import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import { View, FlatList } from 'react-native'
import { getPosts, listPostss } from '../../../graphql/queries'
import Post from '../../components/Post'

const SearchResultsScreen = ({ posts }) => {
  return (
    <View>
      <FlatList data={posts} renderItem={({ item }) => <Post post={item} />} />
    </View>
  )
}

export default SearchResultsScreen
