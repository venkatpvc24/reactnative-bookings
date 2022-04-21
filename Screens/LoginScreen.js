/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
import React, {useState, useRef} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {validate} from 'react-email-validator'

import PVCButton from '../components/Button';
import Logo from '../components/Logo';
import Heading from '../components/Heading';
import Paragraph from '../components/Paragraph';
import TextInput from '../components/TextInput';
import Background from '../components/Background';

export function onLoggedIn(token) {}


export default function LoginScreen(props) {
  const [email, setEmail] = useState({value: '', error: ''});
  const [password, setPassword] = useState({value: '', error: ''});


  const handleBlur = () => {
    const isValid = validate(email.value);

    if (!isValid) {
      setEmail({...email, error: 'oops, need valid email address'});
    }
  };


  return (
    <Background>
    <View style={{padding: 30, flex: 1, justifyContent: 'flex-end'}}>
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
          errorText={email.error}
          onChangeText={txt =>
            setEmail({value: txt, error: ''})
          }
          onBlur={handleBlur}
          style={styles.input}
          activeOutlineColor="red"
        />
        <TextInput 
          label="Password" 
          returnKeyType="done" 
          secureTextEntry 
          onChangeText={txt =>
            setPassword({value: txt, error: ''})
          }
          />
        <View style={{alignItems: 'flex-end'}}><Paragraph>Forgot password?</Paragraph></View>
        <PVCButton mode="contained">Login</PVCButton>
        <Paragraph >Dont have an account? signup</Paragraph>
        <PVCButton
          mode="text"
          onPress={() => props.navigation.navigate('Signup')}>
          Signup
        </PVCButton>
      </View>
    </View>
    </Background>
  );
}

const styles = StyleSheet.create({
  forgotPassword: {
    alignItems: 'flex-end',
  },
  input: {
    color: 'green',
    marginBottom: 20,
    borderBottomColor: 'red',
  },
});
