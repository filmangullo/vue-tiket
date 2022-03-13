import { StyleSheet, Text, View } from 'react-native' 
import React from 'react'

const ItemValuePrice = ({label, value, valueColor='#020202'}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>{label}</Text>
      <Text style={styles.value(valueColor)}>{value}</Text>
    </View>
  )
}

export default ItemValuePrice

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  label: {
    fontSize: 14,
    fontFamily: 'Poppins-Regular',
    color: '#8d92a3'
  },
  value: (color) => ({
    fontSize: 14,
    fontFamily: 'Poppins-Regular',
    color: color
  })

})