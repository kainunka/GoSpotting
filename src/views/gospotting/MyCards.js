import React, { Component, PropTypes } from 'react';

import {
  ScrollView,
  View,
  Text,
  StyleSheet, TouchableOpacity,
} from 'react-native';

class MyCards extends Component {
  constructor(props) {
    super(props);
    this.state={route: 0}
    this.navigateTo = this.navigateTo.bind(this);
  }

  navigateTo(index) {
    this.props.navigate(index);
  }

  render() {
    return (
      <View style={styles.container}>
      <ScrollView style={styles.view}>
        <Text style={styles.h1}>My Cards</Text>
      </ScrollView>
      <View style={styles.footer}>
        <TouchableOpacity style={styles.footerButton}
          onPress={this.navigateTo.bind(this, 9)}
        >
        <Text style={styles.footerText}>Switch to Find Cards(Map view)</Text>
        </TouchableOpacity>
      </View>
      </View>
    );
  }
}

MyCards.propTypes = {
  navigate: PropTypes.func.isRequired
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
  footer: {
    height: 50,
    justifyContent: 'center',
    backgroundColor: '#ffba0b',
    alignItems: 'center',
  },
  footerButton: {
    borderWidth: 1,
    borderRadius: 5,
    backgroundColor: 'black'
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

export default MyCards;
