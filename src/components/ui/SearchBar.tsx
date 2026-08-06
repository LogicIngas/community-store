import React from 'react';
import { View, TextInput, StyleSheet, TextInputProps } from 'react-native';
import { Search } from 'lucide-react-native';
import { Colors, Fonts } from '../../theme';

interface SearchBarProps extends TextInputProps {
  placeholder?: string;
}

export default function SearchBar({ placeholder = "Search...", ...props }: SearchBarProps) {
  return (
    <View style={styles.container}>
      <Search color={Colors.secondaryText} size={20} style={styles.icon} />
      <TextInput
        style={styles.input}
        placeholder={placeholder}
        placeholderTextColor={Colors.secondaryText}
        {...props}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#EAE6E1', // grayish pill color fitting the theme
    borderRadius: 100, // pill shape
    borderWidth: 1,
    borderColor: Colors.border,
    paddingHorizontal: 18,
    paddingVertical: 13, // increased to make the search bar bigger
    marginHorizontal: 16,
    marginVertical: 8,
  },
  icon: {
    marginRight: 10,
  },
  input: {
    flex: 1,
    fontFamily: Fonts.regular,
    fontSize: 16, // slightly larger text
    color: Colors.head,
    padding: 0, // removes default android padding
  }
});
