import React, { Component, PropTypes } from 'react';
import {
  View, ScrollView,
  Text,
  StyleSheet, TouchableOpacity
} from 'react-native';

import Icon from 'react-native-vector-icons/Ionicons';

class FindCards extends Component {
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
        <Text style={styles.h1}>FindCards</Text>
      </ScrollView>
      <View style={styles.footer}>
        <TouchableOpacity style={styles.footerButton}
        onPress={this.navigateTo.bind(this, 1)}
        >
        <Text style={styles.footerText}>Switch to view My Cards</Text>
        </TouchableOpacity>
      </View>
      </View>
    );
  }
}

FindCards.propTypes = {
  navigate: PropTypes.func.isRequired
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

export default FindCards;
