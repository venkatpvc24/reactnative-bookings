/* eslint-disable prettier/prettier */
import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

export default function Paragraph(props) {
  return (
    <Text style={styles.paragraph} {...props} />
  );
}

const styles = StyleSheet.create({
  paragraph: {
    fontSize: 16,
    color: 'black',
    textAlign: 'center',
    marginTop: 10,
  },
});
