import React ,{Component} from 'react';
import { Alert, Keyboard, Image, View, StyleSheet,Button, TextInput, Text } from 'react-native';
import { TagSelect } from 'react-native-tag-select';
import * as firebase from "firebase";

import { db } from './database/db';

import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';

export default class select_page extends Component {
  readUserData() {
    db.ref('Traits/').once('value', function (snapshot) {
      console.log(snapshot.val())
    });
}


  
    render() {
      const data = [
        { id: 1, label: 'Money' },
        { id: 2, label: 'Credit card' },
        { id: 3, label: 'Debit card' },
        { id: 4, label: 'Online payment' },
        { id: 5, label: 'Bitcoin' },
      ];
      
        return (
            <View style={[styles.container, styles.content]}>
                <View>
                    <Text style={styles.title}>
                        Add Trait
                    </Text>
                </View>
                
                <View style={styles.UserSelection}>  
                
               
                  
                </View>

                <View style={styles.TagSelected}>
                <Text style={styles.labelText}>Tratis you can select:</Text>
                    <TextInput
                      label="Search a trati"
                      placeholder="Search a trait"
                      style={styles.search}
                    />      
                   
                   <TagSelect
                    data={data}
                    ref={(tag) => {
                      this.tag = tag;
                    }}
                  />                       
              </View>

              <View style={styles.bottom}>
              <Button
                  title="Add an Item"
                  onPress={() => navigate('Additems')}
                />
                    <Button style={styles.button} title="Submit" onPress={() => {
                    Alert.alert('Selected items:', JSON.stringify(this.tag.itemsSelected));
                  }}>Submit</Button>
                    </View>
            </View>
          );
        }
      }
      
      const styles = StyleSheet.create({
        container: {
          flex: 1,
          backgroundColor: '#ecf0f1',
        },
        title:{
            textAlign:'center',
            marginTop:10,
            marginLeft:10,
            marginRight:10,
            borderBottomColor: 'pink', 
            borderBottomWidth: 5,

        },
        UserSelection:{
            marginLeft:20,
            marginRight:20,
            borderColor:'rgb(255,255,255)'
        },
        search:{
            marginLeft:30,
            marginRight:30,
            marginTop:30,
        marginBottom:30,

        },
        TagSelected:{
            marginTop:120,
            marginLeft:10,
            marginRight:10,

        },
        
        content: {
          paddingTop: 40,
          padding: 16,
        },
        button: {
            position: 'absolute',
            bottom:0
        },
        
        bottom: {
            flex: 1,
            justifyContent: 'flex-end',
            marginBottom: 36
          },
          item: {
            borderWidth: 1,
            borderColor: '#333',    
            backgroundColor: '#FFF',
          },
          label: {
            color: '#333'
          },
          itemSelected: {
            backgroundColor: '#333',
          },
          labelSelected: {
            color: '#FFF',
          },
        
      });
      


  

/*       
                 <Button
                    style={{fontSize: 20, color: 'green', alignItems:"flex-end"}}
                    styleDisabled={{color: 'red'}}
                    onPress={() => this._handlePress()}
                    title="Save"
                    >
                    Save
                </Button>
                <Button
                    style={{fontSize: 20, color: 'green'}}
                    styleDisabled={{color: 'red'}}
                    onPress={() => this._handlePress()}
                    title="Delete"
                    >
                    Delete
                </Button>
                
                */