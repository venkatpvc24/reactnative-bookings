/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View} from 'react-native';

import PVCButton from '../components/Button';
import Logo from '../components/Logo';
import Heading from '../components/Heading';
import Paragraph from '../components/Paragraph';

export default function StartScreen(props) {
  return (
    <View style={{padding: 30, backgroundColor: '15eae9'}}>
      <Logo />
      <Heading heading="Training Center" />
      <Paragraph para="Pilates and Personnel Training" />
      <View style={{marginTop: 30}}>
        <PVCButton
          mode="contained"
          onPress={() => props.navigation.navigate('Login')}>
          Login
        </PVCButton>
        <PVCButton
          mode="outlined"
          onPress={() => props.navigation.navigate('Signup')}>
          Signup
        </PVCButton>
      </View>
    </View>
  );
}
