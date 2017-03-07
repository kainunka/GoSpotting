import React, { Component } from 'react';
import {
  View, ScrollView,
  Text,
  StyleSheet, TouchableOpacity
} from 'react-native';

import Icon from 'react-native-vector-icons/Ionicons';

const MapView = () => {
  return (
    <View style={styles.container}>
    <ScrollView style={styles.view}>
      <Text style={styles.h1}>MapView</Text>
    </ScrollView>
    <View style={styles.footer}>

      <TouchableOpacity style={styles.footerButton}>
      <Icon style={styles.icon} name='md-person' size={25} color="#000" />
      <Text style={styles.footerText}>Activities</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.footerButton}>
      <Icon style={styles.icon} name='md-card' size={25} color="#000" />
      <Text style={styles.footerText}>Cards</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.footerButton}>
      <Icon style={styles.icon} name='md-pin' size={25} color="#000" />
      <Text style={styles.footerText}>All</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.footerButton}>
      <Icon style={styles.icon} name='md-flame' size={25} color="#000" />
      <Text style={styles.footerText}>Promotions</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.footerButton}>
      <Icon style={styles.icon} name='md-bookmarks' size={25} color="#000" />
      <Text style={styles.footerText}>Items</Text>
      </TouchableOpacity>

    </View>
    </View>
  );
}

const styles = StyleSheet.create({
  view: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#1a1a1a',
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
  footer: {
    flexDirection: 'row',
    height: 50,
    justifyContent: 'center',
    backgroundColor: '#ffba0b',
    alignItems: 'center',
  },
  footerButton: {
    flex: 1,
    height: 50,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 0.5,
    borderColor: '#000',
    backgroundColor: '#a56327',
  },
  footerText: {
    color: 'black',
    fontSize: 12,
    fontWeight: 'bold',
  },
  icon: {
    color: 'black',
  }
});

export default MapView;
