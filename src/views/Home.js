import React, { Component, PropTypes } from 'react';
import {
  ScrollView, View, Text,
  Image, StyleSheet, TouchableOpacity
} from 'react-native';
import Button from 'apsl-react-native-button';
import Icon from 'react-native-vector-icons/Ionicons';
import { menuHome } from '../data.service';
import PopupDialog, { DialogTitle } from 'react-native-popup-dialog';

class Home extends Component {
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

      <Image source={require('../img/bg.jpg')} style={styles.container}>
      <ScrollView style={styles.view}>


      {menuHome.map((item, idx) => (
        <TouchableOpacity key={idx} onPress={this.navigateTo.bind(this, item.index)}>
        <View style={styles.button} color='transparent'>
        <Icon style={styles.icon} name={item.icon} size={30} color="#000" />
        <Text style={styles.text}>  {item.label}</Text>
        </View>
        </TouchableOpacity>
      ))}

      </ScrollView>

      <PopupDialog
        dialogTitle={<DialogTitle title="Header" />}
        height={ 400 }
        width={ 300 }
        ref={(popupDialog) => { this.popupDialog = popupDialog; }}
      >
        <View style={styles.popupView}>
          <View style={styles.popupHeader}>
            <Text color='#fff'>Header</Text>
          </View>
          <View style={styles.popupContent}>
            <Text>Content</Text>
          </View>
          <View style={styles.popupFooter}>
            <Text color='#fff'>Footer</Text>
          </View>
        </View>
      </PopupDialog>

      <View style={styles.footer}>
        <TouchableOpacity style={styles.footerButton}
        onPress={() => { this.popupDialog.show();}}
        >
        <Text style={styles.footerText}>Create Activity</Text>
        </TouchableOpacity>

      </View>
      </Image>

    )
  }
}

Home.propTypes = {
  navigate: PropTypes.func.isRequired
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
    resizeMode: 'cover',
    width: null,
    height: null
  },
  button: {
    height: 70,
    flex: 4,
    flexDirection: 'row',
    paddingLeft: 50,
    marginBottom: 15,
    alignItems: 'center',
    borderWidth: 2,
    borderRadius: 2,
    borderColor: '#ffc80b'
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
  text: {
    fontSize: 18,
    flex: 3,
    textAlign: 'left',
    color: '#ffc80b',
    fontWeight: 'bold'
  },
  icon: {
    textAlign: 'right',
    padding: 10,
    flex: 1,
    color: '#ffc80b',
  },
  popupView: {
    flex: 5,
    width: null,
    height: null,
    margin: 10,
  },
  popupHeader: {
    flex: 1,
    backgroundColor: '#000',
    height: 50,
  },
  popupContent: {
    flex: 3,
    backgroundColor: '#fff',
    height: 50,
  },
  popupFooter: {
    flex: 1,
    backgroundColor: '#000',
    height: 50,
  }
});

export default Home;
