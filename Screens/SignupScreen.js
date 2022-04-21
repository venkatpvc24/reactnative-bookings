/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';

import PVCButton from '../components/Button';
import Logo from '../components/Logo';
import TextInput from '../components/TextInput';
import {onLoggedIn} from './LoginScreen';
import Heading from '../components/Heading';
import Background from '../components/Background';

export default function SignupScreen(props) {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');

  const [isError, setError] = useState(false);
  const [message, setMessage] = useState('');

  async function fetchData() {
    console.log('registration starts');
    const payload = {
      email: email,
      password: password,
      name: name,
    };

    let response = await fetch('http://localhost:3000/signup', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload),
    });

    let status = response.status;
    response = await response.json();

    return new Promise((resolve, reject) => {
      let json_response = {
        status: status,
        message: response.message,
        token: response.token ? response.token : '',
      };
      resolve(json_response);
    });
  }

  const submitHandler = e => {
    if (email === '' || name === '' || password === '') {
      setError(true);
      setMessage('require all fields');
      return;
    }

    fetchData()
      .then(res => {
        if (res.status !== 200) {
          console.log(res);
          setError(true);
          setMessage(res.message);
        } else {
          setError(false);
          setMessage(res.message);
          console.log(message);
          onLoggedIn(res.token);
        }
        if (!isError) {
          props.navigation.navigate('Login');
        }
      })
      .catch(err => console.log(err));
  };

  return (
    <Background>
      <View style={{padding: 30, flex: 1, justifyContent: 'flex-end'}}>
        <Logo />
        <Heading>Create Account</Heading>

        <View style={{marginTop: 30}}>
          {isError ? <Text style={styles.error}>{message}</Text> : null}

          <TextInput
            label="Name"
            mode="outlined"
            placeholder="fullname"
            returnKeyType="next"
            errorText={message}
            onChangeText={name => {
              setError(false);
              setName(name);
            }}
          />
          <TextInput
            label="Email"
            mode="outlined"
            placeholder="email"
            returnKeyType="next"
            autoCapitalize="none"
            autoCompleteType="email"
            textContentType="emailAddress"
            keyboardType="email-address"
            onChangeText={email => {
              setEmail(email);
              setError(false);
            }}
          />
          <TextInput
            label="Password"
            mode="outlined"
            placeholder="email"
            returnKeyType="done"
            secureTextEntry
            onChangeText={password => {
              setError(false);
              setPassword(password);
            }}
          />
          <PVCButton
            style={{marginTop: 30}}
            mode="contained"
            onPress={submitHandler}>
            Register
          </PVCButton>
        </View>
      </View>
    </Background>
  );
}

const styles = StyleSheet.create({
  error: {
    padding: 5,
    backgroundColor: 'red',
    color: 'white',
    textAlign: 'center',
    fontSize: 20,
    margin: 25,
  },
});
