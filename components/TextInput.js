/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import React from 'react';
import {View, Text, StyleSheet} from 'react-native'
import {TextInput as PapaerInput} from 'react-native-paper';

export default function TextInput({errorText, ...props}) {
  return (
    <View style={styles.container}>
    <PapaerInput
        {...props}
    />
    {errorText ? <Text style={{color: 'red'}}>{errorText}</Text> : null}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginBottom: 15,
  },
  error: {
    color: 'green',
  },
});
