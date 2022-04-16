import React from 'react';
import {Text, StyleSheet} from 'react-native';
import LOGO from '../Images';

export default function Heading(props) {
  return <Text style={styles.heading}>{props.heading}</Text>;
}

const styles = StyleSheet.create({
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    letterSpacing: 1,
    textAlign: 'center',
    color: 'red',
    marginTop: 20,
    marginBottom: 10,
  },
});
