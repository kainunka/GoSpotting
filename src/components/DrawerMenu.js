import React, { Component, PropTypes } from 'react';

import {
  View, ScrollView, Text, Image,
  Dimensions, TouchableOpacity, StyleSheet
} from 'react-native';

import Icon from 'react-native-vector-icons/Ionicons';
import { menuItems } from '../data.service';

class DrawerMenu extends Component {
  constructor(props) {
    super(props);
    this.state={route: 0}
    this.navigateTo = this.navigateTo.bind(this);
  }

  navigateTo(index) {
    this.props.navigate(index);
  }

  render() {
    return(
      <ScrollView style={styles.drawer}>
        <View style={styles.header} key={0}>
          <View style={styles.headerIcon} key={0}>
            <Icon name="md-person" size={50} color="#fff" />
          </View>
          <View style={styles.headerInfo} key={1}>
            <Text style={styles.headerTitle} key={0}>
              Users
            </Text>
            <Text style={styles.headerEmail} key={1}>
              Noname@gmail.com
            </Text>
          </View>
        </View>
        <View style={styles.content} key={1}>
          <View>
            {menuItems.map((item, idx) => (
              <TouchableOpacity
                key={idx}
                style={styles.listItem}
                onPress={this.navigateTo.bind(this, item.index)}
              >
                <Icon name={item.icon} size={25} color="#c8c8c8" />
                <Text style={styles.listItemTitle}>{item.label}</Text>

              </TouchableOpacity>
            ))}
          </View>
        </View>
      </ScrollView>
    )
  }
}

DrawerMenu.propTypes = {
  navigate: PropTypes.func.isRequired
}

const styles = StyleSheet.create({
  drawer: {
    flex: 1,
    backgroundColor: '#f0f0f0',
  },
  header: {
    height: 110,
    flex: 1,
    flexDirection: 'row',
    padding: 16,
    backgroundColor: '#ffba0b'
  },
  content: {
    flex: 3,
    padding: 16,
    backgroundColor: '#f0f0f0'
  },
  headerInfo: {
    height: 56
  },
  headerIcon: {
    width: 70,
    height: 70,
    borderRadius: 45,
    marginBottom: 5,
    marginRight: 15,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#000'
  },
  headerTitle: {
    color: '#000',
    fontSize: 20,
    fontWeight: 'bold'
  },
  headerEmail: {
    color: '#000',
    fontSize: 16
  },
  listItem: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    height: 50,
    marginBottom: 10,

  },
  listItemTitle: {
    fontSize: 18,
    flexShrink: 1,
    color: '#000',
    marginLeft: 20
  },
  listItemImage: {
    width: 80,
    height: 80,
    borderRadius: 7,
    marginRight: 10,
  }
});

export default DrawerMenu;
