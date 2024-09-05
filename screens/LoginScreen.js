import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity, ActivityIndicator, Alert, ImageBackground } from 'react-native';

const LoginScreen = ({ navigation }) => {


  const [email, setEmail] = useState();  // Set default email
  const [password, setPassword] = useState();  // Set default password
  const [loading, setLoading] = useState(false);

  const handleLogin = () => {
    if (!email || !password) {
      Alert.alert('Error', 'Please fill in all fields.');
      return;
    }
  
    setLoading(true);
    // Simulate a login request
    setTimeout(() => {
      setLoading(false);
      navigation.reset({
        index: 0,
        routes: [{ name: 'App' }],  // Reset navigation to the AppNavigator
      });
    }, 2000);
  };

  return (
    <ImageBackground
      source={require('../assets/login.jpg')} // Update this path to your background image
      style={styles.container}
      imageStyle={{ borderRadius: 12 }}
    >
      <View style={styles.overlay}>
        <Text style={styles.title}>Login</Text>

        <TextInput
          style={styles.input}
          placeholder="Email"
          placeholderTextColor="#999"
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
        />
        <TextInput
          style={styles.input}
          placeholder="Password"
          placeholderTextColor="#999"
          secureTextEntry
          value={password}
          onChangeText={setPassword}
        />

        {loading ? (
          <ActivityIndicator size="large" color="#ff6f61" />
        ) : (
          <TouchableOpacity style={styles.button} onPress={handleLogin}>
            <Text style={styles.buttonText}>Login</Text>
          </TouchableOpacity>
        )}

        <TouchableOpacity onPress={() => navigation.navigate('Signup')}>
          <Text style={styles.link}>Don't have an account? Sign Up</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate('ForgotPassword')}>
          <Text style={styles.link}>Forgot Password?</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      padding: 20,
      backgroundColor: '#f4f4f9',  // Light background color
    },
    overlay: {
      backgroundColor: 'rgba(0, 0, 0, 0.5)', // Dark overlay for readability
      padding: 30,  // Added padding for better spacing
      borderRadius: 15,
      alignItems: 'center',
      shadowColor: '#000',
      shadowOpacity: 0.2,
      shadowRadius: 10,
      shadowOffset: { width: 0, height: 5 },
      elevation: 5,
    },
    title: {
      fontSize: 32,  // Larger font size for better visibility
      fontWeight: '700',
      color: '#fff',
      marginBottom: 20,
      textAlign: 'center',  // Center-align text
    },
    input: {
      backgroundColor: '#fff',
      borderWidth: 1,
      borderColor: '#ddd',
      padding: 15,
      marginVertical: 10,
      width: '100%',
      borderRadius: 10,
      color: '#333',
      fontSize: 16,
      shadowColor: '#000',
      shadowOpacity: 0.1,
      shadowRadius: 5,
      shadowOffset: { width: 0, height: 2 },
      elevation: 2,
    },
    button: {
      backgroundColor: '#ff6f61',
      padding: 15,
      borderRadius: 25,
      width: '100%',
      alignItems: 'center',
      marginVertical: 10,
      shadowColor: '#000',
      shadowOpacity: 0.3,
      shadowRadius: 8,
      shadowOffset: { width: 0, height: 4 },
      elevation: 3,
    },
    buttonText: {
      color: '#fff',
      fontSize: 18,  // Slightly larger font size for button text
      fontWeight: '600',
    },
    link: {
      color: '#ff6f61',
      fontSize: 16,
      marginTop: 10,
      textDecorationLine: 'underline',  // Underline for links
    },
  });
  

export default LoginScreen;
