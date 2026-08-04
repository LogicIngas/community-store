import React from "react";
import { View, StyleSheet, Pressable } from "react-native";
import { Plus } from "lucide-react-native";
import { Colors } from "../../../theme";

type CenterActionButtonProps = {
  onPress: () => void;
  onLongPress: () => void;
  isFocused: boolean;
};

export default function CenterActionButton({
  onPress,
  onLongPress,
  isFocused,
}: CenterActionButtonProps) {
  return (
    <Pressable
      accessibilityState={isFocused ? { selected: true } : {}}
      onPress={onPress}
      onLongPress={onLongPress}
      style={styles.tabItem}
    >
      {({ pressed }) => (
        <View style={[
          styles.plusButton,
          { backgroundColor: pressed ? Colors.primaryDark : Colors.primary }
        ]}>
          <Plus color={Colors.white} size={36} />
        </View>
      )}
    </Pressable>
  );
}

const styles = StyleSheet.create({
  tabItem: {
    flex: 1,
    alignItems: "center",
    justifyContent: "flex-start",
  },
  plusButton: {
    width: 62,
    height: 62,
    borderRadius: 16, // A nice curved square (squircle)
    borderWidth: 4,
    borderColor: Colors.white,
    alignItems: "center",
    justifyContent: "center",
    marginTop: -28,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.08,
    shadowRadius: 6,
    elevation: 2.3,
  },
});
