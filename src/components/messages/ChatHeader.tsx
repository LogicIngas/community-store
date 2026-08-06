import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, ImageSourcePropType } from 'react-native';
import { ChevronLeft } from 'lucide-react-native';
import { Colors, Fonts, Shadows } from '../../theme';

interface ChatHeaderProps {
  vendorName: string;
  productName: string;
  avatar: ImageSourcePropType;
  onBack: () => void;
}

export default function ChatHeader({ vendorName, productName, avatar, onBack }: ChatHeaderProps) {
  return (
    <View style={styles.container}>
      <TouchableOpacity 
        onPress={onBack} 
        style={styles.backButton} 
        hitSlop={{ top: 10, bottom: 10, left: 10, right: 10 }}
      >
        <ChevronLeft color={Colors.head} size={28} />
      </TouchableOpacity>
      
      <Image source={avatar} style={styles.avatar} />
      
      <View style={styles.textContainer}>
        <Text style={styles.vendorName} numberOfLines={1}>{vendorName}</Text>
        <Text style={styles.productName} numberOfLines={1}>{productName}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: Colors.white,
    paddingHorizontal: 16,
    paddingVertical: 12,
    ...Shadows.soft,
    zIndex: 10,
  },
  backButton: {
    marginRight: 12,
  },
  avatar: {
    width: 44,
    height: 44,
    borderRadius: 22,
    backgroundColor: Colors.border,
    marginRight: 12,
    borderWidth: 1,
    borderColor: Colors.border,
  },
  textContainer: {
    flex: 1,
    justifyContent: 'center',
  },
  vendorName: {
    fontFamily: Fonts.bold,
    fontSize: 18,
    color: Colors.head,
    marginBottom: 2,
  },
  productName: {
    fontFamily: Fonts.bold,
    fontSize: 13,
    color: Colors.greenAccent,
  },
});
