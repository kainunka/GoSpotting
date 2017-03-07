import React, { Component } from 'react';
import {
  View, ScrollView,
  Text,
  StyleSheet, TouchableOpacity
} from 'react-native';

import Icon from 'react-native-vector-icons/Ionicons';

const Notifications = () => {
  return (
    <View style={styles.container}>
    <ScrollView style={styles.view}>
      <Text style={styles.h1}>Notifications</Text>
    </ScrollView>

    </View>
  );
}

const styles = StyleSheet.create({
  view: {
    flex: 1,
    flexDirection: 'column',
    marginTop: 0,
    padding: 15
  },
  container: {
    flex: 1,
    width: null,
    height: null
  },
  h1: {
    fontSize: 22,
    alignSelf: 'center',
    marginBottom: 20
  }
});

export default Notifications;
