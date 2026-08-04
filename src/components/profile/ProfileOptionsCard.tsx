import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Colors, Fonts } from '../../theme';

type ProfileOptionsCardProps = {
  title: string;
  children: React.ReactNode;
};

export default function ProfileOptionsCard({ title, children }: ProfileOptionsCardProps) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <View style={styles.card}>
        {children}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    paddingHorizontal: 14,
    marginTop: 32,
  },
  title: {
    fontFamily: Fonts.medium,
    fontSize: 13,
    color: Colors.secondaryText,
    marginBottom: 8,
    marginLeft: 4,
    letterSpacing: 0.5,
  },
  card: {
    backgroundColor: Colors.white,
    borderRadius: 16,
    overflow: 'hidden',
    borderWidth: 1,
    borderColor: Colors.border,
  }
});
