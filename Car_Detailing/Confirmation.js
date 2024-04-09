// Confirmation.js
import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const Confirmation = ({ bookingDetails, onReschedule, onCancel }) => {
  return (
    <View style={styles.container}>
      <Text>Booking Details:</Text>
      {/* Render booking details */}
      <Button title="Reschedule" onPress={onReschedule} />
      <Button title="Cancel" onPress={onCancel} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Confirmation;