import React from 'react';
import {View, StyleSheet} from 'react-native';

export default function separator() {
  return (
    <View style={styles.container}>
      <View style={styles.separator}></View>
    </View>
  );
}

const styles = StyleSheet.create({
  separator: {
    flex: 4,
    flexDirection: 'row',
    marginBottom: 25,
    borderBottomWidth: 2,
    borderColor: 'gray',
  },
});
