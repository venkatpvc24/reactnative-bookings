import React from 'react';
import {Text, StyleSheet} from 'react-native';

export default function Paragraph(props) {
  return (
    <Text style={styles.paragraph} {...props}>
      {props.para}
    </Text>
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
