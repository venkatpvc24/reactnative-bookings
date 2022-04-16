/* eslint-disable prettier/prettier */
import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

export default function Paragraph(props) {
  return (
    <View style={styles.paragraph}>
    <Text>
      {props.para}
    </Text>
    </View>
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
