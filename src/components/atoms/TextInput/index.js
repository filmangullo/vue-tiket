import { StyleSheet, Text, View, TextInput as TextInputReactNative } from 'react-native'
import React from 'react'

const TextInput = ({label, placeholder, ...restProps}) => {
  return (
    <View>
      <Text style={styles.label}>{label}</Text>
      <TextInputReactNative style={styles.input} placeholder={placeholder} {...restProps} />
    </View>
  )
}

export default TextInput

const styles = StyleSheet.create({
    label : {
        fontSize:16, 
        fontFamily: 'Poppins-Regular', 
        color: '#020202'
    },
    input: {
        borderWidth: 1, 
        borderColor: '#020202', 
        borderRadius: 8, 
        padding: 10
    }
})