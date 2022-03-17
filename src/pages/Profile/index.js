import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Profile = () => {
  return (
    <View>
      <View style={styles.photoContainer}>
            <View style={styles.photoDashed}>
              <View style={styles.photoContent}>
                <Text style={styles.textAddPhoto}>Add Photo</Text>
              </View>
            </View>
           </View>
    </View>
  )
}

export default Profile

const styles = StyleSheet.create({
  photoContainer: {
    alignItems: 'center',
    marginTop: 26,
    marginBottom: 16
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
})