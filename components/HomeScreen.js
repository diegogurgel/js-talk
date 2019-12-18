import React from 'react';
import { Text, StyleSheet, View } from 'react-native';
import StyledButton from './StyledButton';

export default function HomeScreen() {
  return (
    <View style={styles.screen}>
      <StyledButton />
    </View>
  );
}
const styles = StyleSheet.create({
  screen: {
    display: 'flex',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center'
  }
});
