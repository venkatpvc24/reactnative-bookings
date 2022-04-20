/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View} from 'react-native';

import PVCButton from '../components/Button';
import Logo from '../components/Logo';
import Heading from '../components/Heading';
import Paragraph from '../components/Paragraph';

// eslint-disable-next-line prettier/prettier


export default function Route(props)
{
  const isUserSignedIn = () => false;
  return (
    (!isUserSignedIn ? <Welcome /> : <StartScreen {...props}/>)
  );
}


function Welcome(props)
{
  return (
    <View style={{padding: 30, backgroundColor: '15eae9'}}>
      <Logo />
      <Heading heading="Training Center" />
      <Paragraph> Welcome back - {props.username} </Paragraph>
    </View>
  );
}

function StartScreen(props) {
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
