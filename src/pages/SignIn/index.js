import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Header } from '../../components/molecules'
import { Button, Gap, TextInput } from '../../components/atoms'

const SignIn = ({navigation}) => {
  return (
    <View style={styles.page}>
      <Header title="Sign In" subtitle="Find your best ever meal." />
      <View style={styles.container}>
           <TextInput label="Email Address" placeholder="Your email address" />
           <Gap height={16}/>
           <TextInput label="Password" placeholder="Your Password" />
           <Gap height={24}/>
           <Button text="Sign In" />
           <Gap height={12}/>
           <Button text="Create New Account" color="#8d92a3" textColor="#ffffff" onPress={() => navigation.navigate('SignUp')} />
      </View>
    </View>
  )
}

export default SignIn

const styles = StyleSheet.create({
    page: {
        flex: 1,
        backgroundColor: '#ffffff'
    },
    container: {
        backgroundColor: '#FFFFFF',
        paddingVertical: 26,
        paddingHorizontal: 24,
        marginTop: 24,
        flex: 1,
    }
})