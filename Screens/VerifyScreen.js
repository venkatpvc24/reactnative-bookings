import React from 'react';
import {View} from 'react-native';

import PVCButton from '../components/Button';
import Input from '../components/TextInput';

export default function VerifyScreen() {
  return (
    // eslint-disable-next-line react-native/no-inline-styles
    <View style={{marginTop: 100, padding: 30}}>
      <Input label="OTP" mode="outlined" placeholder="OTP" />
      <PVCButton mode="contained">VERIFY</PVCButton>
      <PVCButton mode="text">Resend code</PVCButton>
    </View>
  );
}
