import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, TextInput, SafeAreaView, Image } from 'react-native';
import dummyUsers from '../dummyUsers';


const HomeScreen = ({ navigation }) => (
  <SafeAreaView style={styles.safeArea}>
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.appName}>Lovv</Text>
        <TouchableOpacity style={styles.profileIcon} onPress={() => navigation.navigate('Profile')}>
          <Text style={styles.profileText}>Profile</Text>
        </TouchableOpacity>
      </View>

      {/* Swipe Cards */}
      <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.swipeCardsContainer}>
        {dummyUsers.map((user) => (
          <View key={user.id} style={styles.card}>
            <Image source={user.image} style={styles.userImage} />
            <Text style={styles.cardText}>{user.name}, {user.age}</Text>
            <Text style={styles.cardDescription}>{user.description}</Text>
          </View>
        ))}
      </ScrollView>

      {/* Search Bar */}
      <View style={styles.searchBarContainer}>
        <TextInput style={styles.searchBar} placeholder="Search matches..." />
      </View>

      {/* Main Features */}
      <ScrollView contentContainerStyle={styles.contentContainer}>
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Discover Matches</Text>
          <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Discover')}>
            <Text style={styles.buttonText}>Find New Matches</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Filter Matches</Text>
          <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Filters')}>
            <Text style={styles.buttonText}>Apply Filters</Text>
          </TouchableOpacity>
        </View>

        {/* Calls to Action */}
        <View style={styles.section}>
          <TouchableOpacity style={styles.ctaButton} onPress={() => navigation.navigate('Upgrade')}>
            <Text style={styles.ctaButtonText}>Upgrade for Premium Features</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>

      {/* Bottom Navigation Bar */}
      {/* <View style={styles.bottomNavBar}>
        <TouchableOpacity style={styles.navButton} onPress={() => navigation.navigate('Home')}>
          <Text style={styles.navButtonText}>Home</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navButton} onPress={() => navigation.navigate('Messages')}>
          <Text style={styles.navButtonText}>Messages</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navButton} onPress={() => navigation.navigate('Matches')}>
          <Text style={styles.navButtonText}>Matches</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navButton} onPress={() => navigation.navigate('Profile')}>
          <Text style={styles.navButtonText}>Profile</Text>
        </TouchableOpacity>
      </View> */}
    </View>
  </SafeAreaView>
);

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#f4f4f9',
  },
  container: {
    flex: 1,
    backgroundColor: '#f4f4f9',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 15,
    paddingVertical: 12,
    backgroundColor: '#fff',
    elevation: 3,
    paddingTop: 25,
    borderBottomWidth: 1,
    borderBottomColor: '#e0e0e0',
  },
  appName: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#ff6f61',
  },
  profileIcon: {
    padding: 8,
  },
  swipeCardsContainer: {
    height: 320,
    marginVertical: 20,
  },
  card: {
    width: 240,
    height: '100%',
    backgroundColor: '#fff',
    borderRadius: 10,
    marginHorizontal: 12,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#e0e0e0',
    elevation: 2,
  },
  userImage: {
    width: 110,
    height: 110,
    borderRadius: 55,
    marginBottom: 12,
  },
  cardText: {
    fontSize: 18,
    fontWeight: '600',
    color: '#333',
    marginBottom: 6,
  },
  cardDescription: {
    fontSize: 14,
    color: '#666',
    textAlign: 'center',
    paddingHorizontal: 10,
  },
  searchBarContainer: {
    paddingHorizontal: 15,
    marginVertical: 10,
  },
  searchBar: {
    backgroundColor: '#fff',
    borderRadius: 20,
    padding: 10,
    fontSize: 16,
    borderWidth: 1,
    borderColor: '#e0e0e0',
  },
  contentContainer: {
    paddingHorizontal: 15,
  },
  section: {
    backgroundColor: '#fff',
    marginVertical: 10,
    padding: 20,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#e0e0e0',
    alignItems: 'center',
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: '700',
    color: '#ff6f61',
    marginBottom: 8,
  },
  button: {
    backgroundColor: '#ff6f61',
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 8,
    marginTop: 10,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
  bottomNavBar: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: 12,
    backgroundColor: '#fff',
    borderTopWidth: 1,
    borderTopColor: '#e0e0e0',
    elevation: 2,
  },
  navButton: {
    alignItems: 'center',
  },
  navButtonText: {
    fontSize: 16,
    color: '#ff6f61',
    fontWeight: '600',
  },
});



export default HomeScreen;
