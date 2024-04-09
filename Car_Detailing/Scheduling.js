// Scheduling.js
import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import CalendarView from './CalendarView';
import TimePreferences from './TimePreferences';
import AddressConfirmation from './AddressConfirmation';

const Scheduling = () => {
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedTime, setSelectedTime] = useState(null);
  const [address, setAddress] = useState(null);

  return (
    <View style={styles.container}>
      <CalendarView onDateSelected={setSelectedDate} />
      <TimePreferences onTimeSelected={setSelectedTime} />
      <AddressConfirmation
        address={address}
        onAddressChange={setAddress}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
});

export default Scheduling;