import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity, TextInputProps } from 'react-native';
import { Colors, Fonts } from '../../theme';
import { Eye, EyeOff } from 'lucide-react-native';

interface PasswordInputProps extends Omit<TextInputProps, 'secureTextEntry'> {
  label?: string;
  rightLabel?: string;
  onRightLabelPress?: () => void;
  icon?: React.ReactNode;
}

export default function PasswordInput({
  label,
  rightLabel,
  onRightLabelPress,
  icon,
  style,
  ...props
}: PasswordInputProps) {
  const [isFocused, setIsFocused] = useState(false);
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  return (
    <View style={styles.container}>
      {(label || rightLabel) && (
        <View style={styles.labelContainer}>
          {label && <Text style={styles.label}>{label}</Text>}
          {rightLabel && (
            <TouchableOpacity onPress={onRightLabelPress}>
              <Text style={styles.rightLabel}>{rightLabel}</Text>
            </TouchableOpacity>
          )}
        </View>
      )}
      
      <View
        style={[
          styles.inputContainer,
          isFocused && styles.inputContainerFocused,
          style,
        ]}
      >
        {icon && <View style={styles.iconContainer}>{icon}</View>}
        <TextInput
          style={styles.input}
          placeholderTextColor={Colors.secondaryText}
          secureTextEntry={!isPasswordVisible}
          onFocus={(e) => {
            setIsFocused(true);
            props.onFocus?.(e);
          }}
          onBlur={(e) => {
            setIsFocused(false);
            props.onBlur?.(e);
          }}
          {...props}
        />
        <TouchableOpacity 
          style={styles.eyeIcon} 
          onPress={() => setIsPasswordVisible(!isPasswordVisible)}
          activeOpacity={0.7}
        >
          {isPasswordVisible ? (
            <EyeOff size={20} color={Colors.secondaryText} />
          ) : (
            <Eye size={20} color={Colors.secondaryText} />
          )}
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginBottom: 20,
  },
  labelContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 8,
  },
  label: {
    fontFamily: Fonts.bold,
    fontSize: 12,
    color: Colors.head,
    textTransform: 'uppercase',
    letterSpacing: 0.5,
  },
  rightLabel: {
    fontFamily: Fonts.bold,
    fontSize: 12,
    color: Colors.primaryDark,
    textTransform: 'uppercase',
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: Colors.white,
    borderWidth: 1,
    borderColor: Colors.border,
    borderRadius: 12,
    height: 56,
    paddingHorizontal: 16,
  },
  inputContainerFocused: {
    borderColor: Colors.primary,
  },
  iconContainer: {
    marginRight: 12,
  },
  input: {
    flex: 1,
    fontFamily: Fonts.regular,
    fontSize: 15,
    color: Colors.head,
    height: '100%',
  },
  eyeIcon: {
    marginLeft: 12,
    padding: 4,
  },
});
