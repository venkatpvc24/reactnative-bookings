import React from 'react';
import {
  View,
  ImageBackground,
  KeyboardAvoidingView,
  StyleSheet,
} from 'react-native';
import START_BG from '../Images';

export default function Background({children}) {
  return <View style={styles.background}></View>;
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    width: '100%',
    backgroundColor: '#15eae9',
  },
  container: {
    flex: 1,
    padding: 20,
    width: '100%',
    maxWidth: 340,
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
