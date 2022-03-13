import { StyleSheet, Text, View, SafeAreaView, ScrollView } from 'react-native'
import React from 'react'
import {Header} from '../../components/molecules';
import {Button, Gap, Select, TextInput} from '../../components/atoms';

const SignUpAddress = ({navigation}) => {
  return (
    <SafeAreaView style={styles.page}>
      <ScrollView>
        <Header
          title="Address"
          subtitle="Make sure it's valid"
          onBack={() => {}}
        />
        <View style={styles.container}>
          <TextInput label="Phone Number" placeholder="Type your phone number" />
          <Gap height={16} />
          <TextInput label="Address" placeholder="Type your anddress" />
          <Gap height={16} />
          <TextInput label="House No." placeholder="Type your house number" />
          <Gap height={16} />
          <Select label="City" />
          <Gap height={24} />
          <Button text="Sign up Now" onPress={() => navigation.replace('SignUpSuccess') } />
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default SignUpAddress

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
})