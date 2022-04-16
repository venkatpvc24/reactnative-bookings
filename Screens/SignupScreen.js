/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View} from 'react-native';

import PVCButton from '../components/Button';
import Logo from '../components/Logo';
import TextInput from '../components/TextInput';

export default function SignupScreen(props) {
  return (
    <View style={{padding: 30}}>
      <Logo />
      <View style={{marginTop: 30}}>
        <TextInput label="Name" mode="outlined" placeholder="fullname" />
        <TextInput label="Email" mode="outlined" placeholder="email" />
        <TextInput label="Password" mode="outlined" placeholder="email" />
        <PVCButton
          style={{marginTop: 30}}
          mode="contained"
          onPress={() => props.navigation.navigate('Verification')}>
          Register
        </PVCButton>
      </View>
    </View>
  );
}
