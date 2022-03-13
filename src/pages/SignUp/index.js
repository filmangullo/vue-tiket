import {StyleSheet, Text, View, SafeAreaView, ScrollView} from 'react-native';
import React from 'react';
import {Header} from '../../components/molecules';
import {Button, Gap, TextInput} from '../../components/atoms';

const SignUp = ({navigation}) => {
  return (
    <SafeAreaView style={styles.page}>
      <ScrollView>
        <Header
          title="Sign Up"
          subtitle="Register for new accouny and eat"
          onBack={() => {}}
        />
        <View style={styles.container}>
          <View style={styles.photoContainer}>
            <View style={styles.photoDashed}>
              <View style={styles.photoContent}>
                <Text style={styles.textAddPhoto}>Add Photo</Text>
              </View>
            </View>
           </View>
          <TextInput label="Full Name" placeholder="Your name" />
          <Gap height={16} />
          <TextInput label="Email Address" placeholder="Your email address" />
          <Gap height={16} />
          <TextInput label="Password" placeholder="Your Password" />
          <Gap height={24} />
          <Button text="Continue" onPress={() => navigation.navigate('SignUpAddress')}/>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default SignUp;

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  container: {
    backgroundColor: '#FFFFFF',
    paddingVertical: 26,
    paddingHorizontal: 24,
    marginTop: 24,
    flex: 1,
  },
  photoContainer: {
      alignItems: 'center',
      marginTop: 26,
      marginBottom: 16
  },
  photoDashed: {
    width: 110,
    height: 110,
    borderRadius: 110,
    borderWidth: 1,
    borderColor: '#8d92a3',
    borderStyle: 'dashed',
    justifyContent: 'center',
    alignItems: 'center',
  },
  photoContent: {
    width: 90,
    height: 90,
    borderRadius: 90,
    backgroundColor: '#f0f0f0',
    padding: 24,
  },
  textAddPhoto: {
    fontSize: 14,
    fontFamily: 'Poppins-Light',
    color: '#8d92a3',
    textAlign: 'center',
  },
});
