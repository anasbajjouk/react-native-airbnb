import React, { useState } from 'react'
import { View, Text, Pressable } from 'react-native'
import styles from './styles'

const GuestsScreen = () => {
  const [adults, setAdults] = useState(0)
  const [children, setChildren] = useState(0)
  const [infants, setInfants] = useState(0)

  return (
    <View>
      <View style={styles.row}>
        <View>
          <Text style={styles.adultsText}>Adults</Text>
          <Text style={styles.ageText}>Ages 13 or above</Text>
        </View>

        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          <Pressable
            onPress={() => setAdults(Math.max(0, adults - 1))}
            style={styles.button}
          >
            <Text>-</Text>
          </Pressable>

          <Text style={styles.numberOfPeople}>{adults}</Text>

          <Pressable
            onPress={() => setAdults(adults + 1)}
            style={styles.button}
          >
            <Text style={styles.signs}>+</Text>
          </Pressable>
        </View>
      </View>

      <View style={styles.row}>
        <View>
          <Text style={styles.adultsText}>Children</Text>
          <Text style={styles.ageText}>Ages 2-12</Text>
        </View>

        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          <Pressable
            onPress={() => setChildren(Math.max(0, children - 1))}
            style={styles.button}
          >
            <Text>-</Text>
          </Pressable>

          <Text style={styles.numberOfPeople}>{children}</Text>

          <Pressable
            onPress={() => setChildren(children + 1)}
            style={styles.button}
          >
            <Text style={styles.signs}>+</Text>
          </Pressable>
        </View>
      </View>

      <View style={styles.row}>
        <View>
          <Text style={styles.adultsText}>Infants</Text>
          <Text style={styles.ageText}>Under 2</Text>
        </View>

        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          <Pressable
            onPress={() => setInfants(Math.max(0, infants - 1))}
            style={styles.button}
          >
            <Text>-</Text>
          </Pressable>

          <Text style={styles.numberOfPeople}>{infants}</Text>

          <Pressable
            onPress={() => setInfants(infants + 1)}
            style={styles.button}
          >
            <Text style={styles.signs}>+</Text>
          </Pressable>
        </View>
      </View>
    </View>
  )
}

export default GuestsScreen
