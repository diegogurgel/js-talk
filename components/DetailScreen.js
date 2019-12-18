import React from 'react';
import { Text, StyleSheet, View } from 'react-native';

const styles = StyleSheet.create({
  screen: {
    display: 'flex',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center'
  }
});

const DetailScreen = () => {
  return (
    <View style={styles.screen}>
      <Text>Detail Screen</Text>
    </View>
  );
};
DetailScreen.navigationOptions = ({ navigation }) => ({
  title: navigation.getParam('item').name
});

export default DetailScreen;
