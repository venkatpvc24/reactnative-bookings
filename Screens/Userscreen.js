// USER SCREEN
import React from 'react';
import {Text, View, StyleSheet, TouchableOpacity} from 'react-native';
import {green100} from 'react-native-paper/lib/typescript/styles/colors';

import Background from '../components/Background';

// USER DETAILS

// SCHE DETAILS

// TRAINER DETAILS

// 3 VIEWS COMBINED IN USER VIEW

export default function User(props) {
  return (
    <View style={styles.container}>
      <View style={styles.menu}>
        <Text style={styles.welcome}>Welcome - {props.user}</Text>
        <TouchableOpacity>
          <Text style={styles.link}>Logout</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.info}>
        <Text style={styles.heading}>Name</Text>
        <Text style={styles.value}>Venkata Chary, Padala</Text>
      </View>
      <View style={styles.info}>
        <Text style={styles.heading}>Gender</Text>
        <Text style={styles.value}>M</Text>
      </View>

      <View style={styles.info}>
        <Text style={styles.heading}>Age</Text>
        <Text style={styles.value}>36</Text>
      </View>
      <View style={styles.info}>
        <Text style={styles.heading}>Contact-info</Text>
        <Text style={styles.value}>0091 - 7013298534</Text>
      </View>
      <View style={styles.info}>
        <Text style={styles.heading}>Email</Text>
        <Text style={styles.value}>venkatpvc24@gmail.com</Text>
        <TouchableOpacity>
          <Text style={styles.link}>Change</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.info}>
        <Text style={styles.heading}>Password</Text>
        <Text style={styles.value}>0324vasu</Text>
        <TouchableOpacity>
          <Text style={styles.link}>Change</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 30,
  },
  menu: {
    flexDirection: 'column',
    justifyContent: 'space-around',
    marginTop: 20,
    borderBottomColor: 'red',
    borderBottomWidth: 3,
  },
  welcome: {
    color: 'green',
  },
  info: {
    flexDirection: 'column'
  },
  heading: {
    color: 'red',
  },
  value: {
    color: 'blue',
  },
});
