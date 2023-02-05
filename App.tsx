import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { SignIn } from './src/component/button';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!tott</Text>
      <SignIn/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
