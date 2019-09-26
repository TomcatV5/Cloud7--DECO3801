import { Container, Item, Form, Input,  Label, TextInput, Text, Button } from "native-base";
import React, { useState, Component } from 'react';
import { Platform, StatusBar, StyleSheet, View } from 'react-native';
import * as firebase from "firebase";



export default class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      error: '',
      loading: false
    };
  }
  OnSignUpPress() {
    this.setState({ error: '', loading: true });
    const { email, password } = this.state;
    firebase.auth().createUserWithEmailAndPassword(email, password)
      .then(() => {
        this.state({ error: '', loading: false });
        this.props.navigation.navigate('Main');
      }).catch(()=>{this.setState({error:'authentation fail',loading:false})})
      
  }
  OnLoginPress() {
    this.setState({ error: '', loading: true });
    const { email, password } = this.state;
    firebase.auth().signInWithEmailAndPassword(email, password)
      .then(() => {
        this.state({ error: '', loading: false });
        this.props.navigation.navigate('Main');
      }).catch(()=>{this.setState({error:'authentation fail',loading:false})})
      
  }

  renderButtonOnloading(){
    if(this.state.loading){
      return <Text>loading</Text>
    }
    return<View>
    <Button full rounded success style={{ marginTop: 20 }} onPress={this.OnLoginPress.bind(this)}>
    <Text>Login</Text>
    </Button>
    
     <Button full rounded success style={{ marginTop: 20 }} onPress={this.OnSignUpPress.bind(this)}>
     <Text>Sign Up</Text>
     </Button>
     </View>
  
  }
 

  render() {
    return (
      <Container style={{marginTop:200}}>
        <Form>
          <Item floatingLabel>
            <Label>Email</Label>
            <Input value={this.state.email}
            onChangeText={email => this.setState({ email })}
             />
          </Item>
          <Item floatingLabel >
            <Label>Password</Label>
            <Input
             value={this.state.password}
              onChangeText={password => this.setState({ password })}
            />
          </Item>
          {this.renderButtonOnloading()}
        
      
      </Form>
      </Container>

    );
  }
}



/*

          <Button full rounded success style={{ marginTop: 20 }}>
            <Text>Login</Text>
          </Button>

          <Button full rounded success style={{ marginTop: 20 }} onPress={() => this.SignUp(this.state.email, this.state.password)}>
            <Text>Signup</Text>
            </Button>
        </Form>
      </Container>

      */