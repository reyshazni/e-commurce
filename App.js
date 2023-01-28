import React from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';

const App = () => {
  return (
    <View style = {styles.container}>
      <TextInput style = {styles.textinput}/>
      <Text>PPPP</Text>
      <Home />
    </View>
  )
}

const Home = () => {
  return (
    <Text>ini Home</Text>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  textinput: {
    borderWidth: 1
  }
});

export default App;