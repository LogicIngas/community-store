import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Colors, Fonts } from '../../theme';

interface DividerProps {
  text?: string;
}

export default function Divider({ text = 'or continue with' }: DividerProps) {
  return (
    <View style={styles.dividerContainer}>
      <View style={styles.dividerLine} />
      <Text style={styles.dividerText}>{text}</Text>
      <View style={styles.dividerLine} />
    </View>
  );
}

const styles = StyleSheet.create({
  dividerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 29,
  },
  dividerLine: {
    flex: 1,
    height: 1,
    backgroundColor: Colors.border,
  },
  dividerText: {
    fontFamily: Fonts.regular,
    fontSize: 13,
    color: Colors.secondaryText,
    paddingHorizontal: 16,
  },
});
