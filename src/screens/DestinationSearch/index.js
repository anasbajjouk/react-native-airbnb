import { useNavigation } from '@react-navigation/native'
import React, { useState } from 'react'
import { View, Text, TextInput, FlatList, Pressable } from 'react-native'
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete'
import Entypo from 'react-native-vector-icons/Entypo'
import searchResults from '../../../assets/data/search'
import { GOOGLE_API_KEY } from '../../../vars'
import styles from './styles'
import SuggestionRow from './SuggestionRow'

const DestinationSearchScreen = () => {
  // const [inputText, setInputText] = useState('')
  const navigation = useNavigation()

  return (
    <View style={styles.container}>
      <GooglePlacesAutocomplete
        placeholder="Where are you going?"
        fetchDetails
        suppressDefaultStyles
        onPress={(data, details = null) => {
          navigation.navigate('Guests')
        }}
        query={{
          key: GOOGLE_API_KEY,
          language: 'en',
          types: '(cities)',
        }}
        styles={{
          textInput: styles.textInput,
        }}
        renderRow={(item) => <SuggestionRow item={item} />}
      />
    </View>
  )
}

export default DestinationSearchScreen
