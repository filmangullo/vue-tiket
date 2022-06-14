import {StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import {Header} from '../../components/molecules';
import {Button, Gap, TextInput} from '../../components/atoms';
import {useForm} from '../../utils';
import {Icon} from 'react-native-elements';
import * as Axios from 'axios';

const SignIn = ({navigation}) => {
  // Using Default Hooks
  // const [email, setEmail] = useState('');
  // const [password, setPassword] = useState('');

  // Using Custom Hooks
  const [form, setForm] = useForm({
    email: '',
    password: '',
  });

  const onSubmit = () => {
    console.log('form: ', form);
    Axios.post('http://foodmarket.local:8088/api/login', form)
      .then(response => {
        console.log('Succes', response);
      })
      .catch(error => {
        console.log('Error', error);
      });
  };

  return (
    <View style={styles.page}>
      <Header title="Sign In" subtitle="Find your best ever meal." />
      <View style={styles.container}>
        <TextInput
          label="Email Address"
          placeholder="Your email address"
          value={form.email}
          onChangeText={value => setForm('email', value)}
        />
        <Gap height={16} />
        <TextInput
          label="Password"
          placeholder="Your Password"
          value={form.password}
          onChangeText={value => setForm('password', value)}
          secureTextEntry
        />
        <Gap height={24} />
        <Button text="Sign In" onPress={onSubmit} />
        <Gap height={12} />

        <Button
          text="Create New Account"
          color="#8d92a3"
          textColor="#ffffff"
          onPress={() => navigation.navigate('SignUp')}
        />
      </View>
    </View>
  );
};

export default SignIn;

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  container: {
    backgroundColor: '#FFFFFF',
    paddingVertical: 26,
    paddingHorizontal: 24,
    marginTop: 24,
    flex: 1,
  },
});
