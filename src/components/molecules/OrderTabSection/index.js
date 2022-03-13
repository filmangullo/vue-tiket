import {
  StyleSheet,
  Text,
  View,
  useWindowDimensions,
  ScrollView,
} from 'react-native';
import React from 'react';
import {TabView, SceneMap, TabBar} from 'react-native-tab-view';
import ItemListFood from '../ItemListFood';
import {
  FoodDummy,
  FoodDummy1,
  FoodDummy2,
  FoodDummy3,
  FoodDummy4,
  FoodDummy5,
  FoodDummy6,
} from '../../../assets';
import {useNavigation} from '@react-navigation/native';

const renderTabBar = props => (
  <TabBar
    {...props}
    indicatorStyle={{
      backgroundColor: '#020202',
      height: 3,
    }}
    style={{
      backgroundColor: '#ffffff',
      elevation: 0,
      shadowOpacity: 0,
      borderBottomColor: '#f2f2f2',
      borderBottomWidth: 1,
    }}
    tabStyle={{width: 'auto'}}
    renderLabel={({route, focused, color}) => (
      <Text
        style={{
          fontFamily: 'Poppins-Medium',
          margin: 8,
          color: focused ? '#020202' : '#8d92a3',
        }}>
        {route.title}
      </Text>
    )}
    scrollEnabled={true}
  />
);

const InProgress = () => {
  const navigation = useNavigation();
  return (
    <ScrollView style={styles.tabContainer}>
      <View style={styles.tabContent}>
        <ItemListFood
          onPress={() => navigation.navigate('OrderDetail')}
          image={FoodDummy}
          name={'Dummiy Food'}
          type={'in-progress'}
          items={3}
          price={'2,300'}
        />
        <ItemListFood
          onPress={() => navigation.navigate('OrderDetail')}
          image={FoodDummy1}
          name={'Dummiy Food'}
          type={'in-progress'}
          items={3}
          price={'2,300'}
        />
        <ItemListFood
          onPress={() => navigation.navigate('OrderDetail')}
          image={FoodDummy2}
          name={'Dummiy Food'}
          type={'in-progress'}
          items={3}
          price={'2,300'}
        />
        <ItemListFood
          onPress={() => navigation.navigate('OrderDetail')}
          image={FoodDummy3}
          name={'Dummiy Food'}
          type={'in-progress'}
          items={3}
          price={'2,300'}
        />
        <ItemListFood
          onPress={() => navigation.navigate('OrderDetail')}
          image={FoodDummy4}
          name={'Dummiy Food'}
          type={'in-progress'}
          items={3}
          price={'2,300'}
        />
        <ItemListFood
          onPress={() => navigation.navigate('OrderDetail')}
          image={FoodDummy5}
          name={'Dummiy Food'}
          type={'in-progress'}
          items={3}
          price={'2,300'}
        />
      </View>
    </ScrollView>
  );
};

const PastOrder = () => {
  const navigation = useNavigation();
  return (
    <ScrollView style={styles.tabContainer}>
      <View style={styles.tabContent}>
        <ItemListFood
          onPress={() => navigation.navigate('OrderDetail')}
          image={FoodDummy1}
          name={'Dummiy Food'}
          type={'past-orders'}
          items={3}
          price={'2,300'}
          date={'Jun 12, 14:00'}
        />
        <ItemListFood
          onPress={() => navigation.navigate('OrderDetail')}
          image={FoodDummy2}
          name={'Dummiy Food'}
          type={'past-orders'}
          items={3}
          price={'2,300'}
          date={'Jun 12, 14:00'}
          status={'Cancel'}
        />
        <ItemListFood
          onPress={() => navigation.navigate('OrderDetail')}
          image={FoodDummy3}
          name={'Dummiy Food'}
          type={'past-orders'}
          items={3}
          price={'2,300'}
          date={'Jun 12, 14:00'}
        />
        <ItemListFood
          onPress={() => navigation.navigate('OrderDetail')}
          image={FoodDummy4}
          name={'Dummiy Food'}
          type={'past-orders'}
          items={3}
          price={'2,300'}
          date={'Jun 12, 14:00'}
        />
        <ItemListFood
          onPress={() => navigation.navigate('OrderDetail')}
          image={FoodDummy5}
          name={'Dummiy Food'}
          type={'past-orders'}
          items={3}
          price={'2,300'}
          date={'Jun 12, 14:00'}
        />
        <ItemListFood
          onPress={() => navigation.navigate('OrderDetail')}
          image={FoodDummy6}
          name={'Dummiy Food'}
          type={'past-orders'}
          items={3}
          price={'2,300'}
          date={'Jun 12, 14:00'}
        />
      </View>
    </ScrollView>
  );
};


const OrderTabSection = () => {
  const renderScene = SceneMap({
    1: InProgress,
    2: PastOrder,
  });

  const layout = useWindowDimensions();

  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    {key: '1', title: 'In Order'},
    {key: '2', title: 'Past Order'},
 
  ]);

  return (
    <TabView
      renderTabBar={renderTabBar}
      navigationState={{index, routes}}
      renderScene={renderScene}
      onIndexChange={setIndex}
      initialLayout={{width: layout.width, height: layout.height}}
      style={styles.tabContainer}
    />
  );
};

export default OrderTabSection;

const styles = StyleSheet.create({
  tabContainer: {
    backgroundColor: '#ffffff',
  },
  tabContent: {
    paddingHorizontal: 24,
  },
});
