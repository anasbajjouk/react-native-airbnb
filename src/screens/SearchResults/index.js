import { API, graphqlOperation } from 'aws-amplify'
import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import { View, FlatList } from 'react-native'
import { getPosts, listPostss } from '../../../graphql/queries'
import Post from '../../components/Post'

const SearchResultsScreen = () => {
  const [posts, setPosts] = useState([])

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

  return (
    <View>
      <FlatList data={posts} renderItem={({ item }) => <Post post={item} />} />
    </View>
  )
}

export default SearchResultsScreen
