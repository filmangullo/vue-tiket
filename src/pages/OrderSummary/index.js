import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {Header, ItemListFood, ItemValuePrice} from '../../components/molecules';
import {FoodDummy1} from '../../assets';
import {Button} from '../../components/atoms';

const OrderSummary = ({navigation}) => {
  return (
    <View>
      <Header
        title="Payment"
        subtitle="Your deserve better meal"
        onBack={() => {}}
      />
      <View style={styles.content}>
        <Text style={styles.label}>Item Order</Text>
        <ItemListFood
          image={FoodDummy1}
          type={'order-summary'}
          name={'Sop Bumil'}
          price={'480,000'}
          items={12}
        />
        <Text style={styles.label}>Detail Transaction</Text>
        <ItemValuePrice label="Soup Bumil" value="IDR 18,000" />
        <ItemValuePrice label="Driver" value="IDR 10,000" />
        <ItemValuePrice label="Tax 10%" value="IDR 1,600" />
        <ItemValuePrice
          label="Total Price"
          value="IDR 32,600"
          valueColor="#1abc9c"
        />
      </View>

      <View style={styles.content}>
        <Text style={styles.label}>Deliver to :</Text>
        <ItemValuePrice label="Name" value="Filman Gulo" />
        <ItemValuePrice label="Phone No." value="0812 2233 4455" />
        <ItemValuePrice label="House No." value="88" />
        <ItemValuePrice label="City" value="Medan" />
      </View>

      <View style={styles.buttonContainer}>
        <Button
          text="Checkout Now"
          onPress={() => navigation.replace('OrderSuccess')}
        />
      </View>
    </View>
  );
};

export default OrderSummary;

const styles = StyleSheet.create({
  content: {
    backgroundColor: '#FFFFFF',
    paddingHorizontal: 24,
    paddingVertical: 16,
    marginTop: 24,
  },
  label: {
    fontSize: 14,
    fontFamily: 'Poppins-Regular',
    color: '#020202',
    marginBottom: 8,
  },

  buttonContainer: {
    paddingHorizontal: 24,
    marginTop: 24,
  },
});
