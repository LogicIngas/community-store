import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { ChevronLeft } from 'lucide-react-native';
import { useNavigation } from '@react-navigation/native';
import { Colors, Fonts } from '../../theme';

interface HeaderProps {
  title: string;
  showBack?: boolean;
  onBack?: () => void;
  rightContent?: React.ReactNode;
  backgroundColor?: string;
}

export default function Header({ title, showBack = false, onBack, rightContent, backgroundColor }: HeaderProps) {
  const navigation = useNavigation();

  const handleBack = () => {
    if (onBack) {
      onBack();
    } else if (navigation.canGoBack()) {
      navigation.goBack();
    }
  };

  return (
    <View style={[styles.container, backgroundColor ? { backgroundColor } : undefined]}>
      <View style={styles.leftContainer}>
        {showBack && (
          <TouchableOpacity 
            onPress={handleBack} 
            style={styles.backButton} 
            hitSlop={{ top: 10, bottom: 10, left: 10, right: 10 }}
          >
            <ChevronLeft color={Colors.head} size={28} />
          </TouchableOpacity>
        )}
        <Text style={[styles.title, showBack && styles.titleWithBack]} numberOfLines={1}>{title}</Text>
      </View>

      <View style={styles.rightContainer}>
        {rightContent}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    paddingVertical: 12,
    backgroundColor: Colors.mainBackground,
  },
  leftContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },
  rightContainer: {
    alignItems: 'flex-end',
    justifyContent: 'center',
  },
  backButton: {
    marginRight: 8,
  },
  title: {
    fontFamily: Fonts.bold,
    fontSize: 24, 
    color: Colors.head,
    marginLeft: 4, // Mushed slightly to the right to not be flush
  },
  titleWithBack: {
    fontSize: 20, 
    marginLeft: 4, 
  }
});
