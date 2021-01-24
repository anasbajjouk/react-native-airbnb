import { useRoute } from '@react-navigation/native'
import React from 'react'
import { View, Text } from 'react-native'
import places from '../../../assets/data/feed'
import DetailedPost from '../../components/DetailedPost'
import Post from '../../components/Post'

const PostScreen = () => {
  const route = useRoute()
  const post = places.find((place) => place.id === route.params.postId)

  return (
    <View style={{ backgroundColor: 'white' }}>
      <DetailedPost post={post}></DetailedPost>
    </View>
  )
}

export default PostScreen
