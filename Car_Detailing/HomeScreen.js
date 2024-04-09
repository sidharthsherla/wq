// HomeScreen.js
import React from 'react';
import { View, FlatList, StyleSheet } from 'react-native';
import FeaturedServices from './FeaturedServices';
import SearchBar from './SearchBar';
import LocationSelector from './LocationSelector';

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <SearchBar />
      <LocationSelector />
      <FeaturedServices />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
});

export default HomeScreen;