import React, { Component } from 'react';
import {
  View, ScrollView,
  Text,
  StyleSheet, TouchableOpacity
} from 'react-native';

import Icon from 'react-native-vector-icons/Ionicons';

const SeePromotions = () => {
  return (
    <View style={styles.container}>
    <ScrollView style={styles.view}>
      <Text style={styles.h1}>SeePromotions</Text>
    </ScrollView>
    <View style={styles.footer}>
      <TouchableOpacity style={styles.footerButton}>
      <Icon style={styles.icon} name='md-search' size={45} color="#000" />
      </TouchableOpacity>
      <TouchableOpacity style={styles.footerButton}>
      <Icon style={styles.icon} name='md-apps' size={45} color="#000" />
      </TouchableOpacity>
    </View>
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
    flexDirection: 'row',
    height: 50,
    justifyContent: 'center',
    backgroundColor: '#ffba0b',
    alignItems: 'center',
  },
  footerButton: {
    marginLeft: 50,
    marginRight: 50,
  },
  footerText: {
    color: '#ffba0b',
    fontWeight: 'bold',
    justifyContent: 'center',
    padding: 8,
  },
  icon: {
    color: 'black',
  }
});

export default SeePromotions;
