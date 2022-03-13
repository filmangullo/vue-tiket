import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import {IlEmptyOrder} from '../../../assets/Ilustration';
import {Button, Gap} from '../../atoms';
import { useNavigation } from '@react-navigation/native';

const EmptyOrder = () => {
    const navigation = useNavigation();
  return (
    <View style={styles.page}>
    <IlEmptyOrder />
    <Gap height={30} />
    <Text style={styles.title}>Yeay! Completed</Text>
    <Gap height={6} />
    <Text style={styles.subTitle}>Now you are able to order</Text>
    <Text style={styles.subTitle}>some foods as a self-reward</Text>
    <Gap height={30} />
    <View style={styles.buttonContainer}>
      <Button text="Find Foods" onPress={() => navigation.replace('MainApp')} />
    </View>
  </View> 
  )
}

export default EmptyOrder

const styles = StyleSheet.create({
    page: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#ffffff'
      },
      title: {
        fontFamily: 'Poppins-Regular',
        fontSize: 20,
        color: '#020202',
      },
      subTitle: {
        fontFamily: 'Poppins-Light',
        fontSize: 14,
        color: '#8d92a3',
      },
      buttonContainer: {
          width: '100%',
          paddingHorizontal: 80
      }
}) 