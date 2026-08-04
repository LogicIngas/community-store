import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Colors, Fonts } from "../../theme";

type ProfileDetailsProps = {
  name: string;
  subText: string;
  subIcon: React.ReactNode;
};

export default function ProfileDetails({ name, subText, subIcon }: ProfileDetailsProps) {
  return (
    <View style={styles.container}>
      <Text style={styles.name}>{name}</Text>
      <View style={styles.subContainer}>
        {subIcon}
        <Text style={styles.subText}>{subText}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    paddingBottom: 8,
    paddingTop: 15,
  },
  name: {
    fontFamily: Fonts.bold,
    fontSize: 26, 
    color: Colors.head,
    marginBottom: 6,
  },
  subContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  subText: {
    fontFamily: Fonts.regular,
    fontSize: 14,
    color: "#6B7280", // Standard soft gray for subtitles
  },
});
