import {StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';
import {ProfileDummy} from '../../../assets';

const HomeWelcome = () => {
  return (
    <View style={styles.profileContainer}>
      <View>
        <Text style={styles.appName}>Food Market</Text>
        <Text style={styles.appDesc}>Let's get some foods</Text>
      </View>
      <Image source={ProfileDummy} style={styles.profile} />
    </View>
  );
};

export default HomeWelcome;

const styles = StyleSheet.create({
  profileContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 24,
    paddingBottom: 24,
    paddingTop: 32,
    backgroundColor: '#FFFFFF',
  },
  appName: {
    fontSize: 22,
    fontFamily: 'Poppins-Medium',
    color: '#020202',
  },
  profile: {
    height: 50,
    width: 50,
    borderRadius: 8,
  },
});
