import React, { useEffect } from 'react';
import { View } from 'react-native';
import { Text } from 'react-native';
import { StyleSheet } from 'react-native';
import { Logo } from '../../assets';

const SplashScreen = ({navigation}) => {
    useEffect (() => {
        setTimeout(() => {
            navigation.replace('SignIn')
        }, 2000)
    }, []);

    return (
        <View style={styles.container}>
            <Logo style={styles.logoImage} />
            <Text style={styles.textTitle}>FoodMarket</Text>
        </View>
    )
};


const styles = StyleSheet.create({
    container: {
        backgroundColor:'#ffc700',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    logoImage: {
        height: 38
    },
    textTitle: {
        fontSize: 32, 
        color: '#020202',
        fontFamily: 'Poppins-Medium'
    }

})
 
export default SplashScreen;