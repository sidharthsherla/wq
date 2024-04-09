// Profile.js
import React from 'react';
import { View, FlatList, StyleSheet } from 'react-native';
import AccountInformation from './AccountInformation';
import BookingHistory from './BookingHistory';
import LoyaltyProgram from './LoyaltyProgram';

const Profile = () => {
  return (
    <View style={styles.container}>
      <AccountInformation />
      <BookingHistory />
      <LoyaltyProgram />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
});

export default Profile;