import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, ImageBackground } from 'react-native';

const HomeScreen = ({ navigation }) => (
  <View style={styles.container}>
    <ImageBackground
      source={require('../assets/home.jpg')}
      style={styles.loveQuoteContainer}
      imageStyle={{ borderRadius: 12 }}
    >
      <Text style={styles.loveQuoteText}>
        "Love is not just looking at each other, it's looking in the same direction." - Antoine de Saint-Exupery
      </Text>
    </ImageBackground>

    <ScrollView contentContainerStyle={styles.contentContainer}>
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Discover New People</Text>
        <Text style={styles.sectionDescription}>
          Swipe through exciting new profiles tailored to your preferences!
        </Text>
        <TouchableOpacity style={styles.swipeButton}>
          <Text style={styles.swipeButtonText}>Start Swiping</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Your Match Journey</Text>
        <View style={styles.progressBarContainer}>
          <View style={styles.progressBar}></View>
        </View>
        <Text style={styles.progressText}>70% to your next match</Text>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Improve Profile</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Date Ideas</Text>
        <Text style={styles.sectionDescription}>
          Looking for a fun date idea? Try a sunset picnic at the park, stargazing, or a cooking class together!
        </Text>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Get More Ideas</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.navigationContainer}>
        <TouchableOpacity style={styles.navButton} onPress={() => navigation.navigate('Auth', { screen: 'Login' })}>
          <Text style={styles.navButtonText}>Login</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navButton} onPress={() => navigation.navigate('Auth', { screen: 'Signup' })}>
          <Text style={styles.navButtonText}>Signup</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f4f4f9',
  },
  contentContainer: {
    padding: 20,
    alignItems: 'center',
  },
  loveQuoteContainer: {
    width: '100%',
    height: 150,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 15,
    marginVertical: 20,
    marginHorizontal: '5%',
    borderRadius: 12,
    overflow: 'hidden',
  },
  loveQuoteText: {
    color: '#fff',
    fontSize: 18,
    fontStyle: 'italic',
    textAlign: 'center',
  },
  section: {
    backgroundColor: '#fff',
    marginVertical: 10,
    padding: 20,
    borderRadius: 12,
    alignItems: 'center',
    width: '100%',
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 5,
    shadowOffset: { width: 0, height: 3 },
    elevation: 3,
  },
  sectionTitle: {
    fontSize: 22,
    fontWeight: '600',
    marginBottom: 10,
    color: '#ff6f61',
  },
  sectionDescription: {
    fontSize: 16,
    textAlign: 'center',
    color: '#6d6d6d',
    marginBottom: 20,
  },
  swipeButton: {
    backgroundColor: '#ff6f61',
    padding: 12,
    borderRadius: 25,
    width: '60%',
    alignItems: 'center',
  },
  swipeButtonText: {
    color: '#fff',
    fontSize: 16,
  },
  progressBarContainer: {
    width: '100%',
    height: 10,
    backgroundColor: '#e0e0e0',
    borderRadius: 5,
    marginVertical: 10,
  },
  progressBar: {
    width: '70%',
    height: '100%',
    backgroundColor: '#ff6f61',
    borderRadius: 5,
  },
  progressText: {
    fontSize: 16,
    color: '#ff6f61',
    marginBottom: 20,
  },
  button: {
    backgroundColor: '#ff6f61',
    padding: 10,
    borderRadius: 5,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
  },
  navigationContainer: {
    marginTop: 20,
    width: '100%',
    alignItems: 'center',
  },
  navButton: {
    backgroundColor: '#ff6f61',
    padding: 15,
    borderRadius: 25,
    marginVertical: 10,
    width: '80%',
    alignItems: 'center',
  },
  navButtonText: {
    color: '#fff',
    fontSize: 18,
  },
});

export default HomeScreen;
