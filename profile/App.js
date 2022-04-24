import * as React from 'react';
import { Text, View, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import Constants from 'expo-constants';

// You can import from local files
import AssetExample from './components/AssetExample';

// or any pure javascript modules available in npm

import Profile from './Profile';


export default function App() {
  return (
    <Profile />
  );
}


        /*<Telephone index="0" number="0091 - 8985654602" type="Mobile" />
        <Telephone index="1" number="0091 - 7013298534" type="Work" />
        <Separator />
        <Email index="0" number="venkatpvc24@gmail.com" type="Home" />
        <Email index="1" number="padalash@gmai.com" type="Work" />*/