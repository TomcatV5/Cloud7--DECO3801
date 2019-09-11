import React, {Component} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import LoginForm from './LoginForm_Test';

export default class Login extends Component {
  render(){
    return (
    <View style={styles.container}>
        <View style={(styles.logoContainer)}>
            <Text style={styles.title}>An app for fun</Text>
            </View> 
        <View style={(styles.formContainer)}>
            <LoginForm />
            </View> 
      

    </View> 
  );
}
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#3498db',
  },
  logoContainer:{alignItems:'center',
flexGrow:1,
justifyContent:'center'},
logo:{width:100,height:100},
   title:{
       color:'#FFF',
       marginTop:10,
       width:160,
       textAlign:"center",
       opacity:0.9
   }
});

