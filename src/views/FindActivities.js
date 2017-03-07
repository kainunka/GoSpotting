import React, { Component, PropTypes } from 'react';
import {
  View, ScrollView,
  Text,
  StyleSheet, TouchableOpacity
} from 'react-native';

import Icon from 'react-native-vector-icons/Ionicons';

class FindActivities extends Component {
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
        <Text style={styles.h1}>FindActivities</Text>
      </ScrollView>
      <View style={styles.footer}>
        <TouchableOpacity style={styles.footerButton}
         onPress={this.navigateTo.bind(this, 14)}
        >
        <Text style={styles.footerText}>Create Activity</Text>
        </TouchableOpacity>
        <TouchableOpacity>
        <Icon style={styles.icon} name='md-search' size={45} color="#000" />
        </TouchableOpacity>
      </View>
      </View>
    );
  }
}

FindActivities.propTypes = {
  navigate: PropTypes.func.isRequired
}

const styles = StyleSheet.create({
  view: {
    flex: 1,
    flexDirection: 'column',
    marginTop: 0,
    padding: 15,
    backgroundColor: '#1a1a1a',
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
    color: '#1a1a1a'
  },
  footer: {
    flexDirection: 'row',
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
    marginLeft: 80,
  }
});

export default FindActivities;
