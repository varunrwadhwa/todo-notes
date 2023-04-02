import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  useColorScheme,
  View,
} from 'react-native';

const Header = () => {
  return (
    <View style={styles.mainView}>
      <Text style={styles.text}>
          Good Evening , Varun 
        </Text>
    </View>
  )
}

const styles = StyleSheet.create({
  mainView: {
    backgroundColor: "red",
    borderBottomRightRadius:25,
    borderBottomLeftRadius:25
  },
  text: {
    color: "black",
    fontSize: 30,
    textAlign: 'left',
    marginLeft: 10,
    paddingTop:10,
    paddingBottom:10
  }
})

export default Header;