import { useNavigation } from '@react-navigation/native'
import React from 'react'
import { Pressable } from 'react-native'
import { Image, Text, View } from 'react-native'
import useWindowDimensions from 'react-native/Libraries/Utilities/useWindowDimensions'
import styles from './styles'

const PostCarouselItem = ({ post }) => {
  const widthDimension = useWindowDimensions().width
  const navigation = useNavigation()

  const goToPostPage = () => {
    navigation.navigate('Post', { postId: post.id })
  }
  return (
    <Pressable
      onPress={goToPostPage}
      style={[styles.container, { width: widthDimension - 50 }]}
    >
      <View style={styles.innerContainer}>
        <Image
          style={styles.image}
          source={{
            uri: post.image,
          }}
        />

        <View style={{ flex: 1, marginHorizontal: 10 }}>
          <Text style={styles.bedrooms}>
            {post.bed} bed {post.bedroom} bedroom
          </Text>
          <Text style={styles.description} numberOfLines={2}>
            {post.type}. {post.title}
          </Text>
          <Text style={styles.prices}>
            <Text style={styles.price}>${post.newPrice}</Text> / Night
          </Text>
        </View>
      </View>
    </Pressable>
  )
}

export default PostCarouselItem
