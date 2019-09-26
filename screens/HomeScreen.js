import * as WebBrowser from 'expo-web-browser';
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
  ImageBackground
} from 'react-native';

import { MonoText } from '../components/StyledText';

export default function HomeScreen() {
  return (
    <View>
      <View style={{justifyContent: 'center', alignItems: 'center', paddingTop: 50}}>
        <Image source={require('../assets/images/Logo.png')} />
      </View>

      <View style={{paddingLeft: 50,paddingTop: 20, flexDirection: 'row', justifyContent:'flex-start', alignContent:'center' }}>
            <Image source={require('../assets/images/1.png')}  />
            <TextInput placeholder="Username" style={{fontSize: 14, paddingLeft: 40, fontWeight: 'bold'}} ></TextInput>
      </View>
      <View style={{paddingLeft:100, paddingBottom: 20}}>
        <Image source={require('../assets/images/line.png')} />
      </View>

      <View style={{paddingLeft: 50,flexDirection: 'row', justifyContent:'flex-start', alignContent:'center' }}>
            <Image source={require('../assets/images/2.png')}  />
            <TextInput placeholder="Email" style={{fontSize: 14, paddingLeft: 40, fontWeight: 'bold'}} ></TextInput>
      </View>
      <View style={{paddingLeft:100, paddingBottom: 20}}>
        <Image source={require('../assets/images/line.png')} />
      </View>

      <View style={{paddingLeft: 50,flexDirection: 'row', justifyContent:'flex-start', alignContent:'center' }}>
            <Image source={require('../assets/images/3.png')}  />
            <TextInput placeholder="Location" style={{fontSize: 14, paddingLeft: 40, fontWeight: 'bold'}} ></TextInput>
      </View>
      <View style={{paddingLeft:100, paddingBottom: 20}}>
        <Image source={require('../assets/images/line.png')} />
      </View>

      <View style={{paddingLeft: 50,flexDirection: 'row', justifyContent:'flex-start', alignContent:'center' }}>
            <Image source={require('../assets/images/4.png')}  />
            <TextInput placeholder="Password" style={{fontSize: 14, paddingLeft: 40, fontWeight: 'bold'}} ></TextInput>
      </View>
      <View style={{paddingLeft:100, paddingBottom: 20}}>
        <Image source={require('../assets/images/line.png')} />
      </View>

      <View style={{paddingLeft: 50,flexDirection: 'row', justifyContent:'flex-start', alignContent:'center' }}>
        <Image source={require('../assets/images/4.png')}  />
        <TextInput placeholder="Confirm Password" style={{fontSize: 14, paddingLeft: 40, fontWeight: 'bold'}} ></TextInput>
      </View>
      <View style={{paddingLeft:100, paddingBottom: 20}}>
        <Image source={require('../assets/images/line.png')} />
      </View>
      
      <View style={{flexDirection: 'row', justifyContent:'flex-start', alignContent:'center'}} >
        <Text style={{fontSize: 14, paddingLeft: 70, fontWeight: 'bold'}}>
          CONTINUE >
        </Text>
        <View style={{paddingLeft: 30}} >
          <Image source={require('../assets/images/logo1.png')} />
        </View>
        <View style={{paddingLeft: 30}} >
          <Image source={require('../assets/images/logo2.png')} />
        </View>
        <View style={{paddingLeft: 30}} >
          <Image source={require('../assets/images/logo3.png')} />
        </View>
      </View>
    </View>
  );
}

HomeScreen.navigationOptions = {
  header: null,
};

function DevelopmentModeNotice() {
  if (__DEV__) {
    const learnMoreButton = (
      <Text onPress={handleLearnMorePress} style={styles.helpLinkText}>
        Learn more
      </Text>
    );

    return (
      <Text style={styles.developmentModeText}>
        Development mode is enabled: your app will be slower but you can use
        useful development tools. {learnMoreButton}
      </Text>
    );
  } else {
    return (
      <Text style={styles.developmentModeText}>
        You are not in development mode: your app will run at full speed.
      </Text>
    );
  }
}

function handleLearnMorePress() {
  WebBrowser.openBrowserAsync(
    'https://docs.expo.io/versions/latest/workflow/development-mode/'
  );
}

function handleHelpPress() {
  WebBrowser.openBrowserAsync(
    'https://docs.expo.io/versions/latest/workflow/up-and-running/#cant-see-your-changes'
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  developmentModeText: {
    marginBottom: 20,
    color: 'rgba(0,0,0,0.4)',
    fontSize: 14,
    lineHeight: 19,
    textAlign: 'center',
  },
  contentContainer: {
    paddingTop: 30,
  },
  welcomeContainer: {
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 20,
  },
  welcomeImage: {
    width: 100,
    height: 80,
    resizeMode: 'contain',
    marginTop: 3,
    marginLeft: -10,
  },
  getStartedContainer: {
    alignItems: 'center',
    marginHorizontal: 50,
  },
  homeScreenFilename: {
    marginVertical: 7,
  },
  codeHighlightText: {
    color: 'rgba(96,100,109, 0.8)',
  },
  codeHighlightContainer: {
    backgroundColor: 'rgba(0,0,0,0.05)',
    borderRadius: 3,
    paddingHorizontal: 4,
  },
  getStartedText: {
    fontSize: 17,
    color: 'rgba(96,100,109, 1)',
    lineHeight: 24,
    textAlign: 'center',
  },
  tabBarInfoContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    ...Platform.select({
      android: {
        elevation: 20,
      },
    }),
    alignItems: 'center',
    paddingVertical: 20,
  },
  tabBarInfoText: {
    fontSize: 17,
    color: 'rgba(96,100,109, 1)',
    textAlign: 'center',
  },
  navigationFilename: {
    marginTop: 5,
  },
  helpContainer: {
    marginTop: 15,
    alignItems: 'center',
  },
  helpLink: {
    paddingVertical: 15,
  },
  helpLinkText: {
    fontSize: 14,
    color: '#2e78b7',
  },
});
