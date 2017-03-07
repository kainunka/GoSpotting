import React, { Component } from 'react';
import {
  View, ScrollView,
  Text,
  StyleSheet, TouchableOpacity
} from 'react-native';

import Icon from 'react-native-vector-icons/Ionicons';

const CreateActivity = () => {
  return (
    <View style={styles.container}>
    <ScrollView style={styles.view}>
      <Text style={styles.h1}>CreateActivity</Text>
    </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  view: {
    flex: 1,
    flexDirection: 'column',
    marginTop: 0,
    padding: 15,
    backgroundColor: '#1a1a1a'
  },
  container: {
    flex: 1,
    width: null,
    height: null
  },
  h1: {
    fontSize: 22,
    alignSelf: 'center',
    marginBottom: 20,
    color: '#ffc70a'
  },
  footer: {
    height: 50,
    justifyContent: 'center',
    backgroundColor: '#ffba0b',
    alignItems: 'center',
  }
});

export default CreateActivity;
