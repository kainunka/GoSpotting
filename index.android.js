import React, { Component } from 'react';
import {
  Dimensions,
  AppRegistry
} from 'react-native';

import App from './src/components/App';

export default class AwesomeProject extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <App />
    );
  }
}

AppRegistry.registerComponent('AwesomeProject', () => AwesomeProject);
