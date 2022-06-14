import {StyleSheet, Text, View, SafeAreaView, ScrollView} from 'react-native';
import React from 'react';
import {Header} from '../../components/molecules';
import {Button, Gap, TextInput} from '../../components/atoms';
import {useDispatch, useSelector} from 'react-redux';
import {useForm} from '../../utils';

const SignUp = ({navigation}) => {
  // How to implementation Redux
  // const globalState = useSelector((state) => state.globalReducer);
  // console.log('global :', globalState);
  const [form, setForm] = useForm({
    name: '',
    email: '',
    password: '',
  });

  const dispatch = useDispatch();

  const onSubmit = () => {
    console.log('Form : ', form);
    dispatch({type: 'SET_REGISTER', value: form});

    navigation.navigate('SignUpAddress');
  };

  return (
    <SafeAreaView style={styles.page}>
      <ScrollView style={styles.pageContent}>
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
          <TextInput
            label="Full Name"
            placeholder="Your name"
            value={form.name}
            onChangeText={value => setForm('name', value)}
          />
          <Gap height={16} />
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
            secureTextEntry
            onChangeText={value => setForm('password', value)}
          />
          <Gap height={24} />
          <Button text="Continue" onPress={onSubmit} />
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
  pageContent: {
    flexGrow: 1,
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
    marginBottom: 16,
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
