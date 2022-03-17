import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { IcNext } from '../../../assets'

const ItemListMenu = ({text}) => {
  return (
    <View style={styles.container} >
      <Text style={styles.text} >{text}</Text>
      <IcNext />
    </View>
  )
}

export default ItemListMenu

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingVertical: 7
    },
    text: {
        fontSize: 14,
        fontFamily: 'Poppins-Regular',
        color: '#020202'
    }
})