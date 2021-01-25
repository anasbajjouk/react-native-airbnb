import { Auth } from 'aws-amplify'
import React from 'react'
import { View, Text, Pressable } from 'react-native'

const ProfileScreen = () => {
  const logOut = () => {
    Auth.signOut()
  }
  return (
    <View
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100%',
      }}
    >
      <Pressable
        onPress={() => logOut()}
        style={{
          width: '50%',
          borderRadius: 5,
          height: 40,
          backgroundColor: '#f15454',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Text style={{ color: 'white' }}>Log Out</Text>
      </Pressable>
    </View>
  )
}

export default ProfileScreen
