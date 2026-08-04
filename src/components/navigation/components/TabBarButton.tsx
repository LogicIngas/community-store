import React from "react";
import { Pressable, StyleSheet, Text } from "react-native";
import { Colors, Fonts } from "../../../theme";
import { Home, LayoutGrid, MessageCircle, User } from "lucide-react-native";

type TabBarButtonProps = {
  routeName: string;
  isFocused: boolean;
  onPress: () => void;
  onLongPress: () => void;
};

export default function TabBarButton({
  routeName,
  isFocused,
  onPress,
  onLongPress,
}: TabBarButtonProps) {
  const color = isFocused ? Colors.primary : Colors.head;

  let IconComponent: any = Home;
  let label = "Home";

  if (routeName === "Explore") {
    IconComponent = LayoutGrid;
    label = "Explore";
  } else if (routeName === "Messages") {
    IconComponent = MessageCircle;
    label = "Messages";
  } else if (routeName === "Profile") {
    IconComponent = User;
    label = "Profile";
  }

  return (
    <Pressable
      accessibilityState={isFocused ? { selected: true } : {}}
      onPress={onPress}
      onLongPress={onLongPress}
      style={({ pressed }) => [
        styles.tabItem,
        { opacity: pressed ? 0.6 : 1 } // Instant visual feedback
      ]}
    >
      <IconComponent color={color} size={24} strokeWidth={2} />
      <Text style={[styles.label, { color }]}>{label}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  tabItem: {
    flex: 1,
    alignItems: "center",
    justifyContent: "flex-start",
    gap: 4, // Adds a small gap between icon and label
  },
  label: {
    fontFamily: Fonts.medium,
    fontSize: 11,
  },
});
