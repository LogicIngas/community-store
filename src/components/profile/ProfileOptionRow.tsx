import React from 'react';
import { View, Text, StyleSheet, Pressable } from 'react-native';
import { ChevronRight } from 'lucide-react-native';
import { Colors, Fonts } from '../../theme';

type ProfileOptionRowProps = {
  icon: React.ReactNode;
  label: string;
  rightElement?: React.ReactNode;
  onPress?: () => void;
  isLast?: boolean;
};

export default function ProfileOptionRow({ icon, label, rightElement, onPress, isLast = false }: ProfileOptionRowProps) {
  return (
    <Pressable 
      onPress={onPress} 
      disabled={!onPress} // Only respond to presses if an onPress is provided
      style={({ pressed }) => [
        styles.container,
        !isLast && styles.borderBottom,
        pressed && onPress && { backgroundColor: Colors.primaryLight }
      ]}
    >
      <View style={styles.leftContent}>
        <View style={styles.iconContainer}>
          {icon}
        </View>
        <Text style={styles.label}>{label}</Text>
      </View>
      <View style={styles.rightContent}>
        {rightElement || <ChevronRight color="#9CA3AF" size={20} />}
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    height: 55,
    paddingHorizontal: 16,
    backgroundColor: Colors.white,
  },
  borderBottom: {
    borderBottomWidth: 1,
    borderBottomColor: Colors.border,
  },
  leftContent: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 16,
  },
  iconContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  label: {
    fontFamily: Fonts.medium,
    fontSize: 15,
    color: Colors.head,
  },
  rightContent: {
    justifyContent: 'center',
    alignItems: 'center',
  }
});
