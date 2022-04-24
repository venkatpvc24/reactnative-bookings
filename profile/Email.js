import {Link} from '@react-navigation/native';
import React from 'react';
import {Text, View, TouchableOpacity, StyleSheet, Linking} from 'react-native';

import {Icon} from 'react-native-elements';

export default function Email(props) {
  const email = 'venkatpvc24@gmail.com';
  const onEmail = () => {
    Linking.openURL(`mailto://${email}?subject=subject&body=body`).catch(
      err => {
        console.log(err);
      },
    );
  };

  return (
    <TouchableOpacity>
      <View style={styles.emailContainer}>
        <View style={styles.emailIconContainer}>
          {props.index === '0' ? (
            <Icon
              name="email"
              underlayColor="transparent"
              iconStyle={styles.emailIcon}
              onPress={onEmail}
            />
          ) : null}
        </View>
        <View style={styles.emailPhoneContainer}>
          <View style={styles.emailNumberColumn}>
            <Text style={styles.emailNumber}>{props.number}</Text>
          </View>
          <View style={styles.emailTypeColumn}>
            <Text style={styles.emailType}>{props.type}</Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  emailContainer: {
    flexDirection: 'row',
    marginBottom: 25,
    paddingLeft: 30,
    paddingRight: 30,
  },
  emailIconContainer: {
    flex: 2,
    justifyContent: 'center',
  },
  emailIcon: {
    color: 'darkred',
  },
  emailPhoneContainer: {
    flex: 8,
    flexDirection: 'column',
    justifyContent: 'center',
  },
  emailNumber: {
    color: 'black',
    fontSize: 17,
  },
  emailType: {
    marginTop: 5,
    color: 'darkred',
    fontWeight: '300',
  },
});
