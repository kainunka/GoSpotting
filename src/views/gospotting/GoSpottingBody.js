import React, { Component, PropTypes } from 'react';

import {
  ScrollView, View, Image,
  Text, Linking, StyleSheet
} from 'react-native';

import { gospotting } from '../../data.service';

const GoSpottingBody = (props) => {
  const title = gospotting[props.pageIndex].title;
  const content = gospotting[props.pageIndex].content;
  const image = gospotting[props.pageIndex].image;
  const photo = gospotting[props.pageIndex].photo;
  const photoUrl = gospotting[props.pageIndex].url;
  return(
    <ScrollView contentContainerStyle={styles.container}>
        <Text style={styles.h1}>{title}</Text>

        <Text style={styles.p}>{content}</Text>
    </ScrollView>
  );
}


const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    alignItems: 'center',
    padding: 15
  },
  h1: {
    fontSize: 22,
    marginBottom: 20
  },
  p: {
    fontSize: 16,
    lineHeight: 24
  },
  figure: {
    marginBottom: 20,
  },
  img: {
    width: 300,
    height: 300,
    marginRight: 10,
    marginBottom: 10,
    backgroundColor: '#000'
  },
  credits: {
    flexDirection: 'row'
  },
  labelCredits: {
    fontSize: 18
  },
  linkCredits: {
    fontStyle: 'italic',
    color: '#2962FF'
  }
});

export default GoSpottingBody;
