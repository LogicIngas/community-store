import React from "react";
import { View, Text, StyleSheet, ImageSourcePropType } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { Colors, Fonts } from "../../theme";
import Avatar from "../ui/Avatar"; // Reusable avatar component

type ProfileHeadProps = {
  imageSource: ImageSourcePropType;
  badgeText?: string;
  badgeIcon?: React.ReactNode;
};

export default function ProfileHead({ 
  imageSource, 
  badgeText, 
  badgeIcon 
}: ProfileHeadProps) {
  const insets = useSafeAreaInsets();

  return (
    <View style={[styles.container, { paddingTop: insets.top + 20 }]}>
      <View style={styles.avatarWrapper}>
        <Avatar imageSource={imageSource} size={110} />
        
        {badgeText ? (
          <View style={styles.badgeContainer}>
            {badgeIcon}
            <Text style={styles.badgeText}>{badgeText}</Text>
          </View>
        ) : null}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    paddingBottom: 8,

  },
  avatarWrapper: {
    alignItems: "center",
    justifyContent: "center",
  },
  badgeContainer: {
    position: "absolute",
    bottom: -12, 
    alignSelf: "center", 
    height: 30,
    backgroundColor: Colors.primary,
    borderRadius: 16, 
    borderWidth: 2, 
    borderColor: Colors.white,
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 12,
    gap: 6,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.15,
    shadowRadius: 6,
    elevation: 5,
  },
  badgeText: {
    fontFamily: Fonts.medium,
    fontSize: 11, 
    color: Colors.white,
  },
});
