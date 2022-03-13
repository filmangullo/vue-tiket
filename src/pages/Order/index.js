import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {EmptyOrder, Header, OrderTabSection} from '../../components/molecules';
import {useState} from 'react';

const Order = () => {
  const [isEmpty] = useState(false);
  return (
    <View style={styles.page}>
      {isEmpty ? (
        <EmptyOrder />
      ) : (
        <View style={styles.content}>
          <Header title="Your Orders" subtitle="Wait for the best meal" />
          <View style={styles.tabContent}>
            <OrderTabSection />
          </View>
        </View>
      )}
    </View>
  );
};

export default Order;

const styles = StyleSheet.create({
  page: {
    flex: 1,
  },
  content: {
    flex: 1,
  },
  tabContent: {
    flex: 1,
    marginTop: 24
  },
});
