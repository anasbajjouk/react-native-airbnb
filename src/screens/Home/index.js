import { useNavigation } from '@react-navigation/native'
import React from 'react'
import { View, Text, ImageBackground, Pressable } from 'react-native'
import Fontisto from 'react-native-vector-icons/Fontisto'
import styles from './styles'

const HomeScreen = () => {
  const navigation = useNavigation()

  return (
    <View>
      <Pressable
        style={styles.searchButton}
        onPress={() => navigation.navigate('DestinationSearch')}
      >
        <Fontisto name={'search'} size={25} color={'#f15454'} />
        <Text style={styles.searchButtonText}>Where are you going?</Text>
      </Pressable>

      <ImageBackground
        source={require('../../../assets/images/wallpaper.jpg')}
        style={styles.image}
      >
        <Text style={styles.title}>Go Near</Text>

        <Pressable
          style={styles.button}
          onPress={() => console.info('explore button is clicked')}
        >
          <Text style={styles.buttonText}>Explore nearby stays</Text>
        </Pressable>
      </ImageBackground>
    </View>
  )
}

export default HomeScreen
