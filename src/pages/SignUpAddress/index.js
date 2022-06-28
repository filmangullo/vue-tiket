import {StyleSheet, Text, View, SafeAreaView, ScrollView} from 'react-native';
import React from 'react';
import {Header} from '../../components/molecules';
import {Button, Gap, Select, TextInput} from '../../components/atoms';
import {showMessage, useForm} from '../../utils';
import {useDispatch, useSelector} from 'react-redux';

import * as Axios from 'axios';
import {actionLoading} from '../../redux/action';

const SignUpAddress = ({navigation}) => {
  const [form, setForm] = useForm({
    phoneNumber: '',
    address: '',
    houseNumber: '',
    city: 'Bandung',
  });

  const dispatch = useDispatch();
  const registerReducer = useSelector(state => state.registerReducer);
  const photoReducer = useSelector(state => state.photoReducer);

  const onSubmit = () => {
    // console.log('form :', form);
    const data = {
      ...form,
      ...registerReducer,
    };
    console.log('data Register : ', data);
    console.log('data Photo : ', photoReducer);

    dispatch(actionLoading(true));
    Axios.post('http://foodmarket.local:8088/api/register', data)
      .then(res => {
        // console.log('data Register : ', res.data);
        console.log(
          'data Token',
          `${res.data.data.token_type} ${res.data.data.access_token}`,
        );
        // Function upload photo
        if (photoReducer.isUploadPhoto) {
          const forUploadPhoto = new FormData();
          forUploadPhoto.append('file'.photoReducer);
          Axios.post(
            'http://foodmarket.local:8088/api/user/update-profile-photo',
            forUploadPhoto,
            {
              headers: {
                Authorization: `${res.data.data.token_type} ${res.data.data.access_token}`,
                'Content-Type': 'multipart/form-data',
              },
            },
          )
            .then(resUpload => {
              console.log('upload photo succes : ', resUpload);
            })
            .catch(err => {
              console.log('Upload Error : ', err?.response);
              showMessage('Upload Photo doesnt success');
            });
        }
        // Endfunction

        showMessage('Register Succes', 'success');
        dispatch(actionLoading(false));
        // navigation.replace('SignUpSuccess');
      })
      .catch(err => {
        // console.log('Sign Up Erro', err.response.data.meta.message);
        dispatch(actionLoading(false));
        showMessage(err?.response?.data?.meta?.message);
      });
  };

  return (
    <SafeAreaView style={styles.page}>
      <ScrollView contentContainerStyle={{flexGrow: 1}}>
        <Header
          title="Address"
          subtitle="Make sure it's valid"
          onBack={() => {}}
        />
        <View style={styles.container}>
          <TextInput
            label="Phone Number"
            placeholder="Type your phone number"
            value={form.phoneNumber}
            onChangeText={value => setForm('phoneNumber', value)}
          />
          <Gap height={16} />
          <TextInput
            label="Address"
            placeholder="Type your anddress"
            value={form.address}
            onChangeText={value => setForm('address', value)}
          />
          <Gap height={16} />
          <TextInput
            label="House No."
            placeholder="Type your house number"
            value={form.houseNumber}
            onChangeText={value => setForm('houseNumber', value)}
          />
          <Gap height={16} />
          <Select
            label="City"
            value={form.city}
            onSelectChange={value => setForm('city', value)}
          />
          <Gap height={24} />
          <Button text="Sign up Now" onPress={onSubmit} />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default SignUpAddress;

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
});
