import {Button, StyleSheet} from 'react-native';
import React from 'react';
import colors from '../utils/colors';

export const SignIn = () => (
    <Button title="Sign In"/>
)

const styles = StyleSheet.create({
    button: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    }})