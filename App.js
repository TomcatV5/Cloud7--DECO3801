import React from 'react';
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Button,
  TextInput,
  Alert
} from 'react-native';


import TagSelect from 'react-native-tag-select';

import db from './SelectPage/database/db';

import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';

import Login from './Login/Login';
import Add from './SelectPage/Component/AddTraits';
import Selection from './SelectPage/Select_Page';

/**
 * Add traits value on the back-end system to computer the final result
 */
class AddTraits extends React.Component {
  render() {
    return (
      <Add />
    )
  }
}

/**
 * the full of function on this interface, it has seven functions.
 * Function has Home, Match, Message, Photos, Entertainment, Notifications, Profile.
 */
class HomeScreen extends React.Component {
  render() {
    return (
      <View >
        <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
          <Text style={{ fontSize: 22, fontWeight: 'bold', paddingTop: 20 }}>Main Page</Text>
          <Image source={require('./assets/images/clogo.png')} />
        </View>
        <View style={{ justifyContent: 'center', alignItems: 'center', paddingTop: 20, paddingBottom: 10 }}>
          <Button
            title='HOW UNIQUE I AM'
            onPress={() => this.props.navigation.navigate('Select')}
          />
        </View>
        <View>
          <View style={{ height: 40, }}>
            <Button title='HOME' color='#707070' />
          </View>
          <View style={{ height: 40 }}>
            <Button title='MATCH' color='#D5D5CE' />
          </View >
          <View style={{ height: 40 }}>
            <Button title='MESSAGES' color='#D5D5CE' />
          </View>
          <View style={{ height: 40, }}>
            <Button title='PHOTOS' color='#F2DBA3' />
          </View>
          <View style={{ height: 40, }}>
            <Button title='ENTERTAINMENT' color='#77BC6A' />
          </View>
          <View style={{ height: 40, }}>
            <Button title='NITIFICATIONS' color='#66C0F8' />
          </View>
          <View style={{ height: 40, }}>
            <Button title='PROFILE' color='#CC634B' />
          </View>
        </View>
      </View>
    );
  }
}

/**
 * Will have the profile function and some setting function
 * it provide the navigation to login page
 */
class SettingsScreen extends React.Component {
  render() {
    return (
      <View>

        <View style={{}}>

          <Text style={{ padding: 20 }}>No User Log</Text>
          <View>
            <Button
              title="Login"
              onPress={() => this.props.navigation.navigate('Details')}
            />
          </View>
        </View>
      </View>

    );
  }
}

/**
 * Show the Login interface and have the Sign-up function.
 */
class DetailsScreen extends React.Component {

  render() {
    return (
      <View>
        <View style={{ justifyContent: 'center', alignItems: 'center' }}>
          <Image source={require('./assets/images/image1.png')} />
        </View>

        <View style={{ paddingLeft: 40, paddingRight: 40 }}>
          <Text style={{ fontWeight: 'bold', fontSize: 25 }}>
            Create a
        </Text>
          <Text style={{ fontWeight: 'bold', fontSize: 25, paddingBottom: 10 }}>
            New Account
        </Text>
          <View>
            <Text>
              For the best experience
          </Text>
            <Text>
              with COPYCATALOG
          </Text>
          </View>
        </View>

        <View style={{ paddingLeft: 80, paddingRight: 80, paddingTop: 40, paddingBottom: 15, flexDirection: 'row', justifyContent: 'space-between', alignContent: 'center' }}>
          <Button title="Log In"
            onPress={() => this.props.navigation.navigate('Login')}

          />
          <Button
            title="Sign Up"
            onPress={() => this.props.navigation.navigate('Sign')}
          />
        </View>
      </View>
    );
  }
}

/**
 * Complete the Login and Register interface, provide the name, location, email, and password.
 */
class SignScreen extends React.Component {
  render() {
    return (
      <View>
        <View style={{ justifyContent: 'center', alignItems: 'center' }}>
          <Image source={require('./assets/images/Logo.png')} />
        </View>
        <View style={{ paddingLeft: 50, paddingTop: 20, flexDirection: 'row', justifyContent: 'flex-start', alignContent: 'center' }}>
          <Image source={require('./assets/images/1.png')} />
          <TextInput placeholder="Username" style={{ fontSize: 14, paddingLeft: 40, fontWeight: 'bold' }} ></TextInput>
        </View>

        <View style={{ paddingLeft: 100, paddingBottom: 20 }}>
          <Image source={require('./assets/images/line.png')} />
        </View>

        <View style={{ paddingLeft: 50, flexDirection: 'row', justifyContent: 'flex-start', alignContent: 'center' }}>
          <Image source={require('./assets/images/2.png')} />
          <TextInput placeholder="Email" style={{ fontSize: 14, paddingLeft: 40, fontWeight: 'bold' }} ></TextInput>
        </View>

        <View style={{ paddingLeft: 100, paddingBottom: 20 }}>
          <Image source={require('./assets/images/line.png')} />
        </View>

        <View style={{ paddingLeft: 50, flexDirection: 'row', justifyContent: 'flex-start', alignContent: 'center' }}>
          <Image source={require('./assets/images/3.png')} />
          <TextInput placeholder="Location" style={{ fontSize: 14, paddingLeft: 40, fontWeight: 'bold' }} ></TextInput>
        </View>

        <View style={{ paddingLeft: 100, paddingBottom: 20 }}>
          <Image source={require('./assets/images/line.png')} />
        </View>

        <View style={{ paddingLeft: 50, flexDirection: 'row', justifyContent: 'flex-start', alignContent: 'center' }}>
          <Image source={require('./assets/images/4.png')} />
          <TextInput placeholder="Password" style={{ fontSize: 14, paddingLeft: 40, fontWeight: 'bold' }} ></TextInput>
        </View>
        <View style={{ paddingLeft: 100, paddingBottom: 20 }}>
          <Image source={require('./assets/images/line.png')} />
        </View>

        <View style={{ paddingLeft: 50, flexDirection: 'row', justifyContent: 'flex-start', alignContent: 'center' }}>
          <Image source={require('./assets/images/4.png')} />
          <TextInput placeholder="Confirm Password" style={{ fontSize: 14, paddingLeft: 40, fontWeight: 'bold' }} ></TextInput>
        </View>

        <View style={{ paddingLeft: 100, paddingBottom: 20 }}>
          <Image source={require('./assets/images/line.png')} />
        </View>

        <View style={{ flexDirection: 'row', justifyContent: 'flex-start', alignContent: 'center', paddingLeft: 50 }} >

          <Button title='CONTINUE >' onPress={() => this.props.navigation.navigate('Home')} />

          <View style={{ paddingLeft: 30 }} >
            <Image source={require('./assets/images/b.png')} />
          </View>

          <View style={{ paddingLeft: 30 }} >
            <Image source={require('./assets/images/f.png')} />
          </View>

          <View style={{ paddingLeft: 30 }} >
            <Image source={require('./assets/images/i.png')} />
          </View>
        </View>
      </View>
    );
  }
}

/**
 * When user select done and the system will computer the mark. 
 * Then it will show on screen and list out a data about smaller with other person.
 */
class ResultScreen extends React.Component {
  render() {
    return (
      <View>
        <View>
          <View style={{ justifyContent: 'center', alignItems: 'center' }}>
            <Text style={{ fontSize: 16, fontWeight: 'bold', }}>YOUR RESULT</Text>
          </View>
          <View style={{ paddingTop: 30, justifyContent: 'center', alignItems: 'center' }}>
            <Image source={require('./assets/images/result.png')} />
          </View>
          <View style={{ paddingTop: 30, paddingRight: 20, justifyContent: 'flex-end', alignItems: 'flex-end' }}>
            <Text style={{ fontSize: 16, fontWeight: 'bold', }}>
              RESULT ANALYSIS
            </Text>
            <View style={{ flexDirection: 'row' }}>
              <View style={{ paddingRight: 10 }}>
                <Image source={require('./assets/images/b.png')} />
              </View >
              <View style={{ paddingRight: 10 }}>
                <Image source={require('./assets/images/f.png')} />
              </View>
              <View style={{ paddingRight: 10 }}>
                <Image source={require('./assets/images/i.png')} />
              </View>
            </View>
          </View>
          <View style={{ paddingLeft: 15, paddingTop: 15 }}>
            <Text style={{ fontSize: 16, fontWeight: 'bold', }}>RESULT ANALYSIS</Text>
          </View>
        </View>

        <View style={{ flexDirection: "row", justifyContent: "space-around", alignItems: "center" }}>
          <View>
            <Text>Painting</Text>
            <Text>23%</Text>
          </View>
          <View >
            <Text>Swimming</Text>
            <Text>35.3%</Text>
          </View>
        </View>

        <View style={{ flexDirection: "row", justifyContent: "space-around", alignItems: "center" }}>
          <View >
            <Text>Painting</Text>
            <Text>23%</Text>
          </View>
          <View >
            <Text>Swimming</Text>
            <Text>35.3%</Text>
          </View>
        </View>
      </View>
    );
  }
}

/**
 * provide the more chioces to select and will send to back-end system to get result.
 */
class SelectPage extends React.Component {
  render() {
    return (
      <Selection />
    )
  }
}

/**
 * Using Firebase to connect the back-end database management and can have the records of users
 */
class LoginScreen extends React.Component {
  render() {
    return (
      <Login />
    )
  }
}

/**
 * The navigation between five page.
 */
const HomeStack = createStackNavigator({
  Home: { screen: HomeScreen },
  Details: { screen: DetailsScreen },
  Result: { screen: ResultScreen },
  Select: { screen: SelectPage },
  ADD: { screen: AddTraits },
});

/**
 * The navigation between 4 page.
 */
const SettingsStack = createStackNavigator({
  Settings: { screen: SettingsScreen },
  Details: { screen: DetailsScreen },
  Sign: { screen: SignScreen },
  Login: { screen: LoginScreen },
});

/**
 * There are Four Bottom-Tab-Navigation
 */
export default createAppContainer(createBottomTabNavigator(
  {
    Settings: { screen: SettingsStack },
    Home: { screen: HomeStack },
    AddTraits: { screen: AddTraits },
    Result: { screen: ResultScreen }
  },

));