import React from 'react';
import { StyleSheet } from 'react-native'
import { Button as PaperButton } from 'react-native-paper';

export default function Button({style, ...props }) {
  return (
    <PaperButton
      style={[
        styles.button,
        style
      ]} 
      {...props}
      >
    </PaperButton>
  );
}


const styles = StyleSheet.create({
  button: {
    width: '100%',
    marginVertical: 10,
    paddingVertical: 2
  }
});
