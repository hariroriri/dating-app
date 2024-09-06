import React from 'react';
import { SafeAreaView, View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import Header from '../components/Header';

const messagesData = [
  { id: '1', sender: 'Jane Doe', message: 'Hey, how are you?' },
  { id: '2', sender: 'John Smith', message: 'Let\'s catch up soon!' },
  { id: '3', sender: 'Emily Johnson', message: 'Are we still on for tomorrow?' },
  // Add more messages here
];

const MessageItem = ({ sender, message }) => (
  <View style={styles.messageItem}>
    <Text style={styles.sender}>{sender}</Text>
    <Text style={styles.message}>{message}</Text>
  </View>
);

const MessagesScreen = () => (
  <SafeAreaView style={styles.safeArea}>
    <View style={styles.container}>
      {/* <Header title="Messages" /> */}
      <FlatList
        data={messagesData}
        renderItem={({ item }) => <MessageItem sender={item.sender} message={item.message} />}
        keyExtractor={item => item.id}
        contentContainerStyle={styles.listContainer}
      />
      <TouchableOpacity style={styles.newMessageButton}>
        <Text style={styles.newMessageButtonText}>New Message</Text>
      </TouchableOpacity>
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
  listContainer: {
    padding: 20,
  },
  messageItem: {
    backgroundColor: '#fff',
    padding: 15,
    borderRadius: 8,
    marginBottom: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3, // For Android shadow
  },
  sender: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
  },
  message: {
    fontSize: 14,
    color: '#555',
  },
  newMessageButton: {
    backgroundColor: '#ff6f61',
    padding: 15,
    borderRadius: 25,
    alignItems: 'center',
    margin: 20,
    position: 'absolute',
    bottom: 20,
    right: 20,
  },
  newMessageButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
});

export default MessagesScreen;
