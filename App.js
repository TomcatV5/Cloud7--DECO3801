/*import React,{Component} from 'react';
import { StyleSheet, Text, View,AppRegistry } from 'react-native';
import Login from './src/LoginFile/Login';


export default class App extends Component{
  render(){
    return (
       <Login />
    );
}
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});


import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import * as Expo from 'expo';
import { StackNavigator} from 'react-navigation';

class HomeScreen extends React.Component {
  static navigationOption = {
    title: 'Home',
  };
  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style = {styles.container}>
        <Text
        onPress= { ()=> navigate('Profile')}>Navigate to Profile
        </Text>
      </View>
    );
  }
}

class ProfileScreen extends React.Component {
  static navigationOption = {
    title: 'Profile',
  };
  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style = {styles.container}>
        <Text
        onPress= { ()=> navigate('Home')}>Navigate to Home
        </Text>
      </View>
    );
  }
}


const NavigationApp = StackNavigator({
  Home: {screen: HomeScreen},
  Profile: { screen: ProfileScreen},
}, {
  navigationOption: {
    headerStyle: {
      marginTop: Expo.Constants.statusBarHeight
    }
  }
});

export default class App extends React.Component {
  render() {
    return <NavigationApp />;
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
*/