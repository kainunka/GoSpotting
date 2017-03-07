import React, { Component, PropTypes } from 'react';
import {
  ScrollView, View, Text,
  Image, StyleSheet, TouchableOpacity
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import PopupDialog, { DialogTitle } from 'react-native-popup-dialog';

class PopupCreateActivity extends Component {

  constructor(props) {
     super(props);
     this.popupDialog = this.popupDialog.bind(this);
  }

  popupDialog() {
    this.popupDialog.show();
  }

  render() {
    return (
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

    );
  }
}


const styles = StyleSheet.create({
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

export default PopupCreateActivity;
