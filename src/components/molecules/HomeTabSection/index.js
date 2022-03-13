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

const New = () => {
  const navigation = useNavigation();
  return (
    <ScrollView style={styles.tabContainer}>
      <View style={styles.tabContent}>
        <ItemListFood
          type={'product'}
          name={'Sop Bumil'}
          price={'40,000'}
          onPress={() => navigation.navigate('FoodDetail')}
          image={FoodDummy}
          rating={4.5}
        />
        <ItemListFood
          type={'product'}
          name={'Sop Bumil'}
          price={'40,000'}
          onPress={() => navigation.navigate('FoodDetail')}
          image={FoodDummy1}
          rating={4.5}
        />
        <ItemListFood
          type={'product'}
          name={'Sop Bumil'}
          price={'40,000'}
          onPress={() => navigation.navigate('FoodDetail')}
          image={FoodDummy2}
          rating={4.5}
        />
        <ItemListFood
          type={'product'}
          name={'Sop Bumil'}
          price={'40,000'}
          onPress={() => navigation.navigate('FoodDetail')}
          image={FoodDummy3}
          rating={4.5}
        />
        <ItemListFood
          type={'product'}
          name={'Sop Bumil'}
          price={'40,000'}
          onPress={() => navigation.navigate('FoodDetail')}
          image={FoodDummy4}
          rating={4.5}
        />
        <ItemListFood
          type={'product'}
          name={'Sop Bumil'}
          price={'40,000'}
          onPress={() => navigation.navigate('FoodDetail')}
          image={FoodDummy5}
          rating={4.5}
        />
      </View>
    </ScrollView>
  );
};

const Popular = () => {
  const navigation = useNavigation();
  return (
    <ScrollView style={styles.tabContainer}>
      <View style={styles.tabContent}>
        <ItemListFood
          type={'product'}
          name={'Sop Bumil'}
          price={'40,000'}
          onPress={() => navigation.navigate('FoodDetail')}
          image={FoodDummy1}
        />
        <ItemListFood
          type={'product'}
          name={'Sop Bumil'}
          price={'40,000'}
          onPress={() => navigation.navigate('FoodDetail')}
          image={FoodDummy2}
        />
        <ItemListFood
          type={'product'}
          name={'Sop Bumil'}
          price={'40,000'}
          onPress={() => navigation.navigate('FoodDetail')}
          image={FoodDummy3}
        />
        <ItemListFood
          type={'product'}
          name={'Sop Bumil'}
          price={'40,000'}
          onPress={() => navigation.navigate('FoodDetail')}
          image={FoodDummy4}
        />
        <ItemListFood
          type={'product'}
          name={'Sop Bumil'}
          price={'40,000'}
          onPress={() => navigation.navigate('FoodDetail')}
          image={FoodDummy5}
        />
        <ItemListFood
          type={'product'}
          name={'Sop Bumil'}
          price={'40,000'}
          onPress={() => navigation.navigate('FoodDetail')}
          image={FoodDummy6}
        />
      </View>
    </ScrollView>
  );
};

const Recommended = () => {
  const navigation = useNavigation();
  return (
    <ScrollView style={styles.tabContainer}>
      <View style={styles.tabContent}>
        <ItemListFood
          type={'product'}
          name={'Sop Bumil'}
          price={'40,000'}
          onPress={() => navigation.navigate('FoodDetail')}
          image={FoodDummy}
        />
        <ItemListFood
          type={'product'}
          name={'Sop Bumil'}
          price={'40,000'}
          onPress={() => navigation.navigate('FoodDetail')}
          image={FoodDummy5}
        />
        <ItemListFood
          type={'product'}
          name={'Sop Bumil'}
          price={'40,000'}
          onPress={() => navigation.navigate('FoodDetail')}
          image={FoodDummy1}
        />
        <ItemListFood
          type={'product'}
          name={'Sop Bumil'}
          price={'40,000'}
          onPress={() => navigation.navigate('FoodDetail')}
          image={FoodDummy2}
        />
      </View>
    </ScrollView>
  );
};

const HomeTabSection = () => {
  const renderScene = SceneMap({
    1: New,
    2: Popular,
    3: Recommended,
  });

  const layout = useWindowDimensions();

  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    {key: '1', title: 'New'},
    {key: '2', title: 'Popular'},
    {key: '3', title: 'Recommended'},
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

export default HomeTabSection;

const styles = StyleSheet.create({
  tabContainer: {
    backgroundColor: '#ffffff',
  },
  tabContent: {
    paddingHorizontal: 24,
  },
});
