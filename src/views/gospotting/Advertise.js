import React, { Component } from 'react';

import {
  ScrollView,
  View,
  Text,
  StyleSheet
} from 'react-native';


const Advertise = () => {
  return (
    <View style={styles.container}>
    <ScrollView style={styles.view}>
      <Text style={styles.h1}>Advertise</Text>
    </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  view: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#373737',
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
    marginBottom: 20,
    color: '#ffc70a',
  },

});

export default Advertise;
