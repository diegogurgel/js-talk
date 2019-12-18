import React from 'react';
import { StyleSheet } from 'react-native';
import Navigation from './components/Navigation';

export default function App() {
  return <Navigation />;
}
const styles = StyleSheet.create({
  screen: {
    display: 'flex',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center'
  }
});
