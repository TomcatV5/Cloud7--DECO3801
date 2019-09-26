import React, { Component } from 'react';
import {
  View,
  Text,
  TouchableHighlight,
  StyleSheet,
  TextInput,
  AlertIOS
} from 'react-native';
import * as Expo from 'expo';

import { db } from '../database/db';



let addTraits = traits => {
  db.ref('/Traits').push({
    TraitsName: traits
  });
};

export default class Additems extends Component {
  constructor(props) {
  super(props);
  state = {
    name: ''
  };
  this.handleChange = this.handleChange.bind(this);
  this.handleSubmit = this.handleSubmit.bind(this);
  }

  
  handleChange(e) {
    this.setState({
      name: e.nativeEvent.text
    });
  }
  handleSubmit() {
    addTraits(this.state.name);
    AlertIOS.alert(
      'Traits saved successfully'
     );
  }

  render() {
    return (
      <View style={styles.main}>
        <Text style={styles.title}>Add Traits</Text>
        <TextInput style={styles.itemInput} onChange={this.handleChange} />
        <TouchableHighlight
          style={styles.button}
          underlayColor="white"
          onPress={this.handleSubmit}
        >
          <Text style={styles.buttonText}>Add Traits</Text>
        </TouchableHighlight>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  main: {
    flex: 1,
    padding: 30,
    flexDirection: 'column',
    justifyContent: 'center',
    backgroundColor: '#6565fc'
  },
  title: {
    marginBottom: 20,
    fontSize: 25,
    textAlign: 'center'
  },
  itemInput: {
    height: 50,
    padding: 4,
    marginRight: 5,
    fontSize: 23,
    borderWidth: 1,
    borderColor: 'white',
    borderRadius: 8,
    color: 'white'
  },
  buttonText: {
    fontSize: 18,
    color: '#111',
    alignSelf: 'center'
  },
  button: {
    height: 45,
    flexDirection: 'row',
    backgroundColor: 'white',
    borderColor: 'white',
    borderWidth: 1,
    borderRadius: 8,
    marginBottom: 10,
    marginTop: 10,
    alignSelf: 'stretch',
    justifyContent: 'center'
  }
});
