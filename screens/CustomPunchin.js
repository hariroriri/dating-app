import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Modal,
  Platform,
  SafeAreaView,
} from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';

const CustomPunchin = () => {
  const [email, setEmail] = useState('');
  const [punchInTime, setPunchInTime] = useState(null);
  const [punchOutTime, setPunchOutTime] = useState(null);
  const [manualDate, setManualDate] = useState(null);
  const [showPicker, setShowPicker] = useState({ type: '', show: false });
  const [showAlert, setShowAlert] = useState(false); // For controlling the alert visibility

  const showDateTimePicker = (type) => {
    setShowPicker({ type, show: true });
  };

  const handleDateChange = (event, selectedDate) => {
    setShowPicker({ ...showPicker, show: false });

    if (selectedDate) {
      if (showPicker.type === 'punchIn') {
        setPunchInTime(selectedDate);
      } else if (showPicker.type === 'punchOut') {
        setPunchOutTime(selectedDate);
      } else if (showPicker.type === 'manualDate') {
        setManualDate(selectedDate);
      }
    }
  };

  const handleSubmit = () => {
    setShowAlert(true); // Show the custom alert modal
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <Text style={styles.header}>User Punch In</Text>

        {/* Email Input */}
        <Text style={styles.label}>User Email</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter Email"
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
        />

        {/* Punch In & Punch Out Time in the same row */}
        <View style={styles.row}>
          <TouchableOpacity style={styles.timeButton} onPress={() => showDateTimePicker('punchIn')}>
            <Text style={styles.buttonText}>
              {punchInTime ? punchInTime.toLocaleTimeString() : 'Punch In Time'}
            </Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.timeButton} onPress={() => showDateTimePicker('punchOut')}>
            <Text style={styles.buttonText}>
              {punchOutTime ? punchOutTime.toLocaleTimeString() : 'Punch Out Time'}
            </Text>
          </TouchableOpacity>
        </View>

        {/* Manual Punch Date */}
        <TouchableOpacity style={styles.dateButton} onPress={() => showDateTimePicker('manualDate')}>
          <Text style={styles.buttonText}>
            {manualDate ? manualDate.toLocaleDateString() : 'Choose Punch Date'}
          </Text>
        </TouchableOpacity>

        {/* Submit Button */}
        <TouchableOpacity style={styles.submitButton} onPress={handleSubmit}>
          <Text style={styles.submitButtonText}>Submit</Text>
        </TouchableOpacity>

        {/* Custom Styled Alert Modal */}
        <Modal
          animationType="slide"
          transparent={true}
          visible={showAlert}
          onRequestClose={() => setShowAlert(false)}
        >
          <View style={styles.modalBackground}>
            <View style={styles.alertContainer}>
              <Text style={styles.alertTitle}>Submission Successful</Text>
              <Text style={styles.alertMessage}>Your punch details have been submitted!</Text>
              <TouchableOpacity
                style={styles.alertButton}
                onPress={() => setShowAlert(false)}
              >
                <Text style={styles.alertButtonText}>OK</Text>
              </TouchableOpacity>
            </View>
          </View>
        </Modal>

        {showPicker.show && (
          <DateTimePicker
            value={new Date()}
            mode={showPicker.type === 'manualDate' ? 'date' : 'time'}
            display={Platform.OS === 'ios' ? 'inline' : 'default'}
            onChange={handleDateChange}
            is24Hour={true} // 24-hour time format
          />
        )}
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#f9f9fb',
  },
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
  },
  header: {
    fontSize: 30,
    fontWeight: '700',
    marginBottom: 40,
    textAlign: 'center',
    color: '#ff6347', // Softer red-orange for the header
    letterSpacing: 1, // Slight letter spacing for better readability
  },
  label: {
    fontSize: 16,
    fontWeight: '600',
    color: '#333',
    marginBottom: 5,
    paddingLeft: 10,
  },
  input: {
    borderColor: '#ccc',
    borderWidth: 1,
    padding: 18,
    borderRadius: 10,
    marginBottom: 20,
    backgroundColor: '#fff',
    elevation: 1,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    fontSize: 16,
    color: '#333',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 25,
  },
  timeButton: {
    flex: 1,
    backgroundColor: '#ff6f61', // Use a slightly stronger red for button
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    marginHorizontal: 8,
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 4, // Make the button feel lifted
  },
  dateButton: {
    backgroundColor: '#ff6f61',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    marginBottom: 25,
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
  },
  buttonText: {
    color: '#fff',
    fontWeight: '600',
    fontSize: 16, // Slightly larger font size for better readability
    letterSpacing: 0.5,
  },
  submitButton: {
    backgroundColor: '#1E201E', // More modern green
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 35,
    elevation: 4,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
  },
  submitButtonText: {
    color: '#fff',
    fontSize: 18, // Slightly bigger for emphasis
    fontWeight: '700', // Bolder text for the submit button
    letterSpacing: 0.75,
  },

  // Styles for Custom Alert Modal
  modalBackground: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)', // Semi-transparent black background
  },
  alertContainer: {
    width: 300,
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 20,
    alignItems: 'center',
    elevation: 5,
  },
  alertTitle: {
    fontSize: 20,
    fontWeight: '700',
    color: '#333',
    marginBottom: 10,
  },
  alertMessage: {
    fontSize: 16,
    color: '#555',
    textAlign: 'center',
    marginBottom: 20,
  },
  alertButton: {
    backgroundColor: '#28a745',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 5,
    elevation: 3,
  },
  alertButtonText: {
    color: '#fff',
    fontWeight: '600',
    fontSize: 16,
  },
});

export default CustomPunchin;
