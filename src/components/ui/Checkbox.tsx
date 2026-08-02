import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { Check } from 'lucide-react-native';
import { Colors, Fonts } from '../../theme';

interface CheckboxProps {
  label: string;
  isChecked: boolean;
  onToggle: (checked: boolean) => void;
}

export default function Checkbox({ label, isChecked, onToggle }: CheckboxProps) {
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() => onToggle(!isChecked)}
      activeOpacity={1}
    >
      <View style={[styles.box, isChecked && styles.boxChecked]}>
        {isChecked && <Check size={14} color="#FFFFFF" strokeWidth={3} />}
      </View>
      <Text style={styles.label}>{label}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 24,
  },
  box: {
    width: 20,
    height: 20,
    borderRadius: 6,
    borderWidth: 1.5,
    borderColor: Colors.border,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 10,
    backgroundColor: 'transparent',
  },
  boxChecked: {
    backgroundColor: Colors.primaryDark,
    borderColor: Colors.primaryDark,
  },
  label: {
    fontFamily: Fonts.regular,
    fontSize: 14,
    color: Colors.head,
  },
});
