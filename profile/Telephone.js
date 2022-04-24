import React from 'react';
import {Text, View, TouchableOpacity, StyleSheet, Linking} from 'react-native';

import {Icon} from 'react-native-elements';

export default function Telephone(props) {
  const number = '8985654602';
  const onPhone = () => {
    Linking.openURL(`tel://${number}`).catch(err => console.log('Error:', err));

  }
  return (
    <TouchableOpacity>
      <View style={styles.telContainer}>
        <View style={styles.telIconContainer}>
          {props.index === '0' ? (
            <Icon
              name="call"
              underlayColor="transparent"
              iconStyle={styles.telIcon}
              onPress={onPhone}
            />
          ) : null}
        </View>
        <View style={styles.telPhoneContainer}>
          <View style={styles.telNumberColumn}>
            <Text style={styles.telNumber}>{props.number}</Text>
          </View>
          <View style={styles.telTypeColumn}>
            <Text style={styles.telType}>{props.type}</Text>
          </View>
        </View>
        <View style={styles.teliconContainer}>
          <Icon
            name="textsms"
            underlayColor="transparent"
            iconStyle={styles.telIcon}
          />
        </View>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  telContainer: {
    flexDirection: 'row',
    marginBottom: 25,
    paddingLeft: 30,
    paddingRight: 30,
  },
  telIconContainer: {
    flex: 2,
    justifyContent: 'center',
  },
  telIcon: {
    color: 'darkred',
  },
  telPhoneContainer: {
    flex: 6,
    flexDirection: 'column',
    justifyContent: 'center',
  },
  telNumber: {
    color: 'black',
    fontSize: 17,
  },
  telType: {
    marginTop: 5,
    color: 'darkred',
    fontWeight: '300',
  },
});
