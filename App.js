import React, { Component } from 'react'
import {
  Platform, 
  StyleSheet, 
  Text,
  View,
  ScrollView,
  Image,
} from 'react-native'
import styles from './styles'

class App extends Component {
  render() {
    return (
      <View style={{ flex: 1 }}>
        <View style={styles.header}>
          <Text style={styles.headerText}>
            Images Example
          </Text>
        </View>
        <ScrollView contentContainerStyle={styles.contentContainer}>
          <View style={styles.card}>
            <Text style={styles.descriptionText}>
                • Adding Local Images
            </Text>
            <Image source={require('./sample-image.jpg')} />
          </View>
          <View style={styles.card}>
            <Text style={styles.descriptionText}>
                • Adding Network Images
            </Text>
            <Image
              style={{width: 200, height: 200 }}
              source={{ uri: 'https://pbs.twimg.com/profile_images/839897125655764994/GYd7zPsP_400x400.jpg' }}
            />
          </View>
      </ScrollView>
      </View>
    );
  }
}

export default App
