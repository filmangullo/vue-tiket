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
import ItemListMenu from '../ItemListMenu';

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

const Account = () => {
  const navigation = useNavigation();
  return (
    <ScrollView style={styles.tabContainer}>
      <View style={styles.tabContent}>
        <ItemListMenu text="Food Menu" />
        <ItemListMenu text="Food Menu" />
        <ItemListMenu text="Food Menu" />
        <ItemListMenu text="Food Menu" />

      </View>
    </ScrollView>
  );
};

const Foodmarket = () => {
  const navigation = useNavigation();
  return (
    <ScrollView style={styles.tabContainer}>
      <View style={styles.tabContent}>
        <ItemListMenu text="Food Menu" />
        <ItemListMenu text="Food Menu" />
        <ItemListMenu text="Food Menu" />
        <ItemListMenu text="Food Menu" />
      </View>
    </ScrollView>
  );
};


const ProfileTabSection = () => {
  const renderScene = SceneMap({
    1: Account,
    2: Foodmarket,
  });

  const layout = useWindowDimensions();

  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    {key: '1', title: 'Account'},
    {key: '2', title: 'Foodmarket'},
 
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

export default ProfileTabSection;

const styles = StyleSheet.create({
  tabContainer: {
    backgroundColor: '#ffffff',
  },
  tabContent: {
    paddingHorizontal: 24,
  },
});
