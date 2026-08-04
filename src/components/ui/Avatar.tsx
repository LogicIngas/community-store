import React from "react";
import { View, Image, StyleSheet, ImageSourcePropType } from "react-native";
import { Colors } from "../../theme";

type AvatarProps = {
  imageSource: ImageSourcePropType;
  size?: number; // Outer container size
};

export default function Avatar({ imageSource, size = 120 }: AvatarProps) {
  const innerSize = size - 8; // Leaves a 4px white border on all sides

  return (
    <View
      style={[
        styles.avatarContainer,
        {
          width: size,
          height: size,
          borderRadius: size / 2,
        },
      ]}
    >
      <Image
        source={imageSource}
        style={[
          styles.avatar,
          {
            width: innerSize,
            height: innerSize,
            borderRadius: innerSize / 2,
          },
        ]}
        resizeMode="cover"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  avatarContainer: {
    backgroundColor: Colors.white,
    alignItems: "center",
    justifyContent: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 4,
  },
  avatar: {
    // Sizing handled inline based on the size prop
  },
});
