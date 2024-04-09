// ServiceSelection.js
import React from 'react';
import { View, FlatList, StyleSheet } from 'react-native';
import ServiceCategory from './ServiceCategory';
import ServiceDetails from './ServiceDetails';
import AddOns from './AddOns';
import PackageDeals from './PackageDeals';

const ServiceSelection = () => {
  return (
    <View style={styles.container}>
      <FlatList
        data={serviceCategories}
        renderItem={({ item }) => <ServiceCategory category={item} />}
        keyExtractor={(item) => item.id}
      />
      <ServiceDetails />
      <AddOns />
      <PackageDeals />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
});

export default ServiceSelection;