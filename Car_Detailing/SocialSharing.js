// SocialSharing.js
import React from 'react';
import { View, TouchableOpacity, StyleSheet } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

const SocialSharing = () => {
  const shareOnFacebook = () => {
    // Share on Facebook
  };

  const shareOnTwitter = () => {
    // Share on Twitter
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={shareOnFacebook}>
        <FontAwesome name="facebook" size={24} color="#3b5998" />
      </TouchableOpacity>
      <TouchableOpacity onPress={shareOnTwitter}>
        <FontAwesome name="twitter" size={24} color="#1da1f2" />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'center',
    padding: 16,
  },
});

export default SocialSharing;