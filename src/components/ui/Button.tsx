import { ReactNode } from "react";
import { Pressable, StyleProp, StyleSheet, ViewStyle } from "react-native";

import { Colors } from "../../theme";

type ButtonProps = {
    children: ReactNode;
    onPress: () => void;
    backgroundColor?: string;
    activeBackgroundColor?: string;
    borderColor?: string;
    hasBorder?: boolean;
    style?: StyleProp<ViewStyle>;
};

export default function Button({
    children,
    onPress,
    backgroundColor = Colors.primary,
    activeBackgroundColor = Colors.primaryDark,
    borderColor = Colors.primary,
    hasBorder = false,
    style,
}: ButtonProps) {
    return (
        <Pressable
            onPress={onPress}
            style={({ pressed }) => {
                let currentBg = hasBorder ? "transparent" : backgroundColor;
                if (pressed) {
                    currentBg = activeBackgroundColor;
                }

                return [
                    styles.button,
                    {
                        backgroundColor: currentBg,
                        borderColor: hasBorder ? borderColor : "transparent",
                        borderWidth: hasBorder ? 1 : 0,
                    },
                    style,
                ];
            }}
        >
            {children}
        </Pressable>
    );
}

const styles = StyleSheet.create({
    button: {
        borderRadius: 16,
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "row",
        paddingVertical: 14,
        paddingHorizontal: 24,
        minHeight: 52,
    },
});
