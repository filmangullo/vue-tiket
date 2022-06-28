import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
  Image,
} from 'react-native';
import React, {useState} from 'react';
import {Header} from '../../components/molecules';
import {Button, Gap, TextInput} from '../../components/atoms';
import {useDispatch, useSelector} from 'react-redux';
import {showMessage, useForm} from '../../utils';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';

const SignUp = ({navigation}) => {
  // How to implementation Redux
  // const globalState = useSelector((state) => state.globalReducer);
  // console.log('global :', globalState);
  const [form, setForm] = useForm({
    name: '',
    email: '',
    password: '',
  });

  const [photo, setPhoto] = useState('');

  const dispatch = useDispatch();

  const onSubmit = () => {
    console.log('Form : ', form);
    dispatch({type: 'SET_REGISTER', value: form});

    navigation.navigate('SignUpAddress');
  };

  const addPhotos = () => {
    let options = {
      saveToPhotos: true,
      mediaType: 'photo',
      selectionLimit: 1,
      quality: 0.5,
      maxWidth: 250,
      maxHeight: 250,
    };
    launchImageLibrary(options, res => {
      // console.log(res);
      if (res.didCancel) {
        showMessage('User cancelled image picker');
      } else {
        // this how to get first array in assets
        let source = res.assets
          .filter(element => typeof element !== undefined)
          .shift();
        const dataImage = {
          uri: source.uri,
          type: source.type,
          name: source.fileName,
        };

        setPhoto(source);
        dispatch({type: 'SET_PHOTO', value: dataImage});
        dispatch({type: 'SET_UPLOAD_STATUS', value: true});
        console.log(source);
      }
    });
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
            <TouchableOpacity onPress={addPhotos}>
              <View style={styles.photoDashed}>
                {photo ? (
                  <Image source={photo} style={styles.photoContent} />
                ) : (
                  <View style={styles.photoContent}>
                    <Text style={styles.textAddPhoto}>Add Photo</Text>
                  </View>
                )}
              </View>
            </TouchableOpacity>
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
    alignItems: 'center',

    padding: 24,
  },
  textAddPhoto: {
    fontSize: 14,
    fontFamily: 'Poppins-Light',
    color: '#8d92a3',
    textAlign: 'center',
  },
});
