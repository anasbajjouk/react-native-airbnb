import React from 'react'
import { View, Text, Image } from 'react-native'
import styles from './styles'

const Post = () => {
  return (
    <View style={styles.container}>
      <Image
        style={styles.image}
        source={{
          uri:
            'https://notjustdev-dummy.s3.us-east-2.amazonaws.com/images/1.jpg',
        }}
      />

      <Text style={styles.bedrooms}>1 bed 1 bedroom</Text>

      <Text style={styles.description} numberOfLines={2}>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Amet,
        voluptates laborum commodi deserunt excepturi provident quo asperiores
        architecto soluta fuga autem dolore quibusdam inventore odio incidunt
        iusto quisquam ipsam dolores?
      </Text>

      <Text style={styles.prices}>
        <Text style={styles.oldPrice}>$36</Text>
        <Text style={styles.price}>  $30</Text> / Night
      </Text>

      <Text style={styles.totalPrice}>$230 total</Text>
    </View>
  )
}

export default Post
