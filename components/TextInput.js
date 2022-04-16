import React from 'react';
import {TextInput as PapaerInput} from 'react-native-paper';

export default function TextInput({...props}) {
  return (
    <PapaerInput
      // eslint-disable-next-line react-native/no-inline-styles
      style={{marginBottom: 10}}
      {...props}
    />
  );
}
