import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import Rating from '../Rating';

/**
 * TYPE :
 * 1. product (default)
 * 2. order-summary
 * 3. in-progress
 * 4. past-orders
*/

const ItemListFood = ({type, image, name, onPress, rating, items, price, date, status}) => {
  
  const renderContent = () => {
    switch(type) {
      case 'order-summary':
        // item list product in ORDER SUMMARY
        return (
          <>
             <View style={styles.textContent}>
               <Text style={styles.textName}>{name}</Text>
               <Text style={styles.textPrice}>IDR {price}</Text>
             </View>
            <Text style={styles.textItems}>{items} items</Text>
          </>
         )
      case 'in-progress':
        // item list product in ORDER with IN PROGRESS
        return (
          <>
             <View style={styles.textContent}>
               <Text style={styles.textName}>{name}</Text>
               <Text style={styles.textPrice}>{items} items - IDR {price}</Text>
             </View>
          </>
         )
      case 'past-orders':
        // item list product in ORDER with PAST ORDER
        return (
          <>
             <View style={styles.textContent}>
               <Text style={styles.textName}>{name}</Text>
               <Text style={styles.textPrice}>{items} item - IDR {price}</Text>
             </View>
              <View>
                <Text style={styles.date}>{date}</Text>
                <Text style={styles.status}>{status}</Text>
              </View>
          </>
         )
      default:
      // item list product in HOME
      return (
        <>
          <View style={styles.textContent}>
            <Text style={styles.textName}>{name}</Text>
            <Text style={styles.textPrice}>IDR {price}</Text>
          </View>
          <Rating rating={rating} />
        </>
      )
   
   }     
  }

  return (
    <TouchableOpacity activeOpacity={0.7} onPress={onPress}>
       <View style={styles.content}>
          <Image source={image} style={styles.image} />
          { renderContent() }
      </View> 
    </TouchableOpacity>
  );
};

export default ItemListFood;

const styles = StyleSheet.create({
  content: {
    flexDirection: 'row',
    backgroundColor: '#ffffff',
    paddingVertical: 8,
    alignItems: 'center',
  },
  image: {
    width: 60,
    height: 60,
    borderRadius: 8,
    overflow: 'hidden',
    marginRight: 12,
  },
  textContent: {
    flex: 1,
  },
  textName: {
    fontFamily: 'Poppins-Regular',
    color: '#020202',
    fontSize: 16,
  },
  textPrice: {
    fontFamily: 'Poppins-Regular',
    fontSize: 13,
    color: '#8d92a3',
  },
  textItems: {
    fontFamily: 'Poppins-Regular',
    fontSize: 14,
    color: '#020202',
  },
  date: {
    fontSize: 10,
    fontFamily: 'Poppins-Regular',
    color: '#8d92a3'
  },
  status: {
    fontSize: 10,
    fontFamily: 'Poppins-Regular',
    color: '#d9435e'
  }
});
