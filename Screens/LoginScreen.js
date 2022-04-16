/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';
import {View, Text, StyleSheet} from 'react-native';

import PVCButton from '../components/Button';
import Logo from '../components/Logo';
import Heading from '../components/Heading';
import Paragraph from '../components/Paragraph';
import TextInput from '../components/TextInput';

export default function LoginScreen(props) {
  return (
    <View style={{padding: 30}}>
      <Logo />
      <Heading heading="Welcome back" />
      <View style={{marginTop: 30}}>
        <TextInput
          label="Email"
          returnKeyType="next"
          autoCapitalize="none"
          autoCompleteType="email"
          textContentType="emailAddress"
          keyboardType="email-address"
        />
        <TextInput label="Password" returnKeyType="done" secureTextEntry />

        <PVCButton mode="contained">Login</PVCButton>
        <Paragraph para="Don't have an account?" />
        <PVCButton
          mode="text"
          onPress={() => props.navigation.navigate('Signup')}>
          Signup
        </PVCButton>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  forgotPassword: {
    alignItems: 'flex-end',
  },
});
