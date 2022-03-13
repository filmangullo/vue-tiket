import {StyleSheet, Text, View, ImageBackground} from 'react-native';
import React from 'react';
import {FoodDummy, IcBackWhite} from '../../assets';
import {TouchableOpacity} from 'react-native';
import {Counter, Rating} from '../../components/molecules';
import {Button} from '../../components/atoms';

const FoodDetail = ({navigation}) => {
  return (
    <View style={styles.page}>
      <ImageBackground source={FoodDummy} style={[styles.cover]}>
        <TouchableOpacity style={[styles.buttonBack]}>
          <IcBackWhite />
        </TouchableOpacity>
      </ImageBackground>
      <View style={styles.content}>
        <View style={styles.mainContent}>
          <View style={styles.productContainer}>
            <View>
              <Text style={styles.title}>Sapi Panggang</Text>
              <Rating />
            </View>
            <Counter />
          </View>
          <View>
            <Text style={styles.desc}>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.
            </Text>
          </View>
          <View>
            <Text style={styles.ingredientLabel}>Ingredient</Text>
            <Text style={styles.desc}>Daging Sapi, bawang, merica</Text>
          </View>
        </View>
        <View style={styles.orderContent}>
          <View style={styles.priceContent}>
            <Text style={styles.labelPrice}>Total Price</Text>
            <Text style={styles.price}>IDR. 500,000</Text>
          </View>
          <View style={styles.buttonOrder}>
            <Button text="Order Now" onPress={() => navigation.navigate('OrderSummary')} />
          </View>
        </View>
      </View>
    </View>
  );
};

export default FoodDetail;

const styles = StyleSheet.create({
  page: {
    flex: 1,
  },
  cover: {
    height: 330,
    paddingTop: 26,
    paddingLeft: 22,
  },
  buttonBack: {
    backgroundColor: 'transparent',
    width: 30,
    height: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
  content: {
    backgroundColor: '#ffffff',
    borderTopRightRadius: 40,
    borderTopLeftRadius: 40,
    marginTop: -40, 
    paddingTop: 25,
    paddingHorizontal: 16,
    flex: 1,
  },
  mainContent: {
    flex: 1,
  },
  productContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 14,
  },
  title: {
    fontSize: 16,
    fontFamily: 'Poppins-Regular',
    color: '#020202',
  },
  desc: {
    fontSize: 14,
    fontFamily: 'Poppins-Regular',
    color: '#8d92a3',
    marginBottom: 14,
  },
  ingredientLabel: {
    fontSize: 16,
    fontFamily: 'Poppins-Regular',
    color: '#020202',
    marginBottom: 4,
  },
  orderContent: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical : 16,
    alignItems: 'center',
  },
  priceContent: {
    flex: 1,
  },
  buttonOrder: {
    width: 163
  },
  labelPrice: {
    fontSize: 13,
    fontFamily: 'Poppins-Regular',
    color: '#8d92a3'
  },
  price: {
    fontSize: 18,
    fontFamily: 'Poppins-Regular',
    color: '#020202'
  },
});
