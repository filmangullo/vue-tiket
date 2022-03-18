import {StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import {Header} from '../../components/molecules';
import {Button, Gap, TextInput} from '../../components/atoms';
import { useForm } from '../../utils';

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
  }

  return (
    <View style={styles.page}>
      <Header title="Sign In" subtitle="Find your best ever meal." />
      <View style={styles.container}>
        <TextInput
          label="Email Address"
          placeholder="Your email address"
          value={form.email}
          onChangeText={value => setForm('email',value)}
        />
        <Gap height={16} />
        <TextInput
          label="Password"
          placeholder="Your Password"
          value={form.password}
          onChangeText={value => setForm('password',value)}
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
