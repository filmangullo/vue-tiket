import {ActivityIndicator, StyleSheet, View} from 'react-native';
import React from 'react';
import {Text} from 'react-native';

const Loading = () => {
  return (
    <View style={styles.container}>
      <ActivityIndicator size="large" color="#1ABC9C" />
      <Text style={styles.text}>Loading . . .</Text>
    </View>
  );
};

export default Loading;

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    flex: 1,
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0, 0.2)',
  },
  text: {
    fontSize: 13,
    fontFamily: 'Poppins-Regular',
    marginTop: 12,
  },
});
