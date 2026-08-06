import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, ImageSourcePropType } from 'react-native';
import { Colors, Fonts } from '../../theme';

interface ConversationListItemProps {
  name: string;
  productName: string;
  lastMessage: string;
  time: string;
  avatar: ImageSourcePropType;
  unreadCount?: number;
  onPress: () => void;
}

export default function ConversationListItem({
  name,
  productName,
  lastMessage,
  time,
  avatar,
  unreadCount = 0,
  onPress
}: ConversationListItemProps) {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress} activeOpacity={0.7}>
      <Image source={avatar} style={styles.avatar} />
      
      <View style={styles.contentContainer}>
        {/* Left Text Column */}
        <View style={styles.textColumn}>
          <Text style={styles.name} numberOfLines={1}>{name}</Text>
          <Text style={styles.productName} numberOfLines={1}>{productName}</Text>
          <Text style={styles.lastMessage} numberOfLines={1}>{lastMessage}</Text>
        </View>
        
        {/* Right Info Column (Time + Badge) */}
        <View style={styles.rightColumn}>
          <Text style={styles.time}>{time}</Text>
          {unreadCount > 0 && (
            <View style={styles.badge}>
              <Text style={styles.badgeText}>{unreadCount}</Text>
            </View>
          )}
        </View>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    marginHorizontal: 16,
    paddingVertical: 12,
    alignItems: 'center',
    backgroundColor: Colors.mainBackground,
    borderBottomWidth: 1, 
    borderBottomColor: Colors.divider,
  },
  avatar: {
    width: 52,
    height: 52,
    borderRadius: 26,
    backgroundColor: Colors.border, 
    marginRight: 14,
  },
  contentContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  textColumn: {
    flex: 1,
    justifyContent: 'center',
    marginRight: 8,
  },
  rightColumn: {
    alignItems: 'flex-end',
    justifyContent: 'center',
  },
  name: {
    fontFamily: Fonts.bold,
    fontSize: 16,
    color: Colors.head,
    marginBottom: 2,
  },
  productName: {
    fontFamily: Fonts.bold,
    fontSize: 13,
    color: Colors.greenAccent,
    marginBottom: 2,
  },
  lastMessage: {
    fontFamily: Fonts.regular,
    fontSize: 14,
    color: Colors.secondaryText,
  },
  time: {
    fontFamily: Fonts.regular,
    fontSize: 12,
    color: Colors.secondaryText,
    marginBottom: 4, // small gap above badge
  },
  badge: {
    backgroundColor: Colors.primary,
    borderRadius: 12,
    minWidth: 24,
    height: 24,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 6,
  },
  badgeText: {
    color: Colors.white,
    fontFamily: Fonts.bold,
    fontSize: 12,
  },
});
