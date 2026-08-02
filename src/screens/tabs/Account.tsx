import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Screen from '../../components/ui/Screen';
import { Colors, Fonts } from '../../theme';

export default function Account() {
  return (
    <Screen statusBar="dark" backgroundColor={Colors.mainBackground}>
      <View style={styles.container}>
        <Text style={styles.text}>This is the Account page</Text>
      </View>
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontFamily: Fonts.bold,
    fontSize: 20,
    color: Colors.head,
  }
});
