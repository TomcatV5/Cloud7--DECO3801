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
} from 'react-native';

export default function SelectPage() 
{
    return
    (
    <ScrollView style={styles.container}>
    {/**
     * Go ahead and delete ExpoLinksView and replace it with your content;
     * we just wanted to provide you with some helpful links.
     */}
    <ExpoLinksView />
  </ScrollView>
  )
}