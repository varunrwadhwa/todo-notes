import React from 'react';
import {
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import Header from './src/Header';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import Todo from './src/todo';
import Notes from './src/notes';

const Tab = createBottomTabNavigator()


const App = () => {

  return (
    <NavigationContainer>
      <ScrollView style={styles.mainView}>
        <Header />
        <Tab.Navigator
          tabBarOptions={{
            activeTintColor: 'green',
            inactiveTintColor: 'black',
            labelStyle: { fontSize: 12 },
            style: { backgroundColor: 'blue', marginTop: 40, padding: 30 },
          }}>
          <Tab.Screen name="todo" component={Todo} />
          <Tab.Screen name="notes" component={Notes} />
        </Tab.Navigator>
      </ScrollView>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  mainView: {
    backgroundColor: "white"
  }
});

export default App;

// List of things to implement by order 
// Basic Screen with complete design 
// Header
// Database to use 
// 