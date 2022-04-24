import React from 'react';
import {
  Text,
  View,
  StyleSheet,
  ScrollView,
  ImageBackground,
  Image,
} from 'react-native';

import {Icon} from 'react-native-elements';

import Telephone from './Telephone';
import Separator from './Separator';
import Email from './Email';

function TopProfile(props) {
  return (
    <View style={styles.profileContainer}>
      <ImageBackground
        source={require('./bg.jpg')}
        style={styles.backgroundImage}>
        <Image source={require('./profile.jpg')} style={styles.profileImage} />
        <Text style={styles.userName}>Venkata Chary</Text>
        <View style={styles.locationRow}>
          <Icon
            name="place"
            underlayColor="transparent"
            iconStyle={styles.icon}
            onPress={this.onPressPlace}
          />
          <Text style={styles.location}>Gurgov, India</Text>
        </View>
      </ImageBackground>
    </View>
  );
}

export default function Profile(props) {
  return (
    <ScrollView>
      <TopProfile />
      <Telephone index="0" number="0091 - 8985654602" type="Mobile" />
      <Telephone index="1" number="0091 - 7013298534" type="Work" />
      <Separator />
      <Email index="0" number="venkatpvc24@gmail.com" type="Home" />
      <Email index="1" number="padalash@gmai.com" type="Work" />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  profileContainer: {
    marginBottom: 35,
    borderBottomColor: 'green',
    borderBottomWidth: 2,
    justifyContent: 'center',
  },
  backgroundImage: {
    alignItems: 'center',
    flexDirection: 'column',
    paddingBottom: 10,
  },
  profileImage: {
    height: 160,
    width: 160,
    marginTop: 20,
    marginBottom: 20,
    borderRadius: 85,
    borderColor: '#000',
    borderWidth: 5,
  },
  userName: {
    fontSize: 24,
    marginBottom: 8,
  },
  locationRow: {
    flexDirection: 'row',
  },
  location: {
    marginTop: 5,
    fontSize: 15,
    alignItems: 'center',
    justifyContent: 'center',
  },
  icon: {
    color: 'white',
    marginRight: 5,
  },
});
