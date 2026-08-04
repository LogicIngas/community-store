import React from "react";
import { StyleProp, StyleSheet, Text, TextStyle, View, ViewStyle } from "react-native";
import { Colors, Fonts } from "../../theme";

export type InfoItem = {
    topText: string;
    bottomText: string;
    topTextColorOverride?: string;
    topIcon?: React.ReactNode;
};

type InfoBarProps = {
    items: InfoItem[];
    topTextColor?: string;
    topTextSize?: number;
    bottomTextColor?: string;
    bottomTextSize?: number;
    separatorColor?: string;
    separatorHeight?: number;
    topTextStyle?: StyleProp<TextStyle>;
    bottomTextStyle?: StyleProp<TextStyle>;
    style?: StyleProp<ViewStyle>;
};

export default function InfoBar({
    items,
    topTextColor = Colors.mainBackground,
    topTextSize = 18,
    bottomTextColor = "rgba(250, 247, 242, 0.7)",
    bottomTextSize = 12,
    separatorColor = "rgba(250, 247, 242, 0.35)",
    separatorHeight = 35,
    topTextStyle,
    bottomTextStyle,
    style,
}: InfoBarProps) {
    return (
        <View style={[styles.container, style]}>
            {items.map((item, index) => (
                <React.Fragment key={index}>
                    <View style={styles.itemContainer}>
                        <View style={styles.topTextWrapper}>
                            <Text style={[styles.topText, { color: item.topTextColorOverride || topTextColor, fontSize: topTextSize }, topTextStyle]} numberOfLines={1}>
                                {item.topText}
                            </Text>
                            {item.topIcon}
                        </View>
                        <Text style={[styles.bottomText, { color: bottomTextColor, fontSize: bottomTextSize }, bottomTextStyle]} numberOfLines={1}>
                            {item.bottomText}
                        </Text>
                    </View>

                    {index < items.length - 1 && (
                        <View style={styles.separatorContainer}>
                            <View style={[styles.separator, { backgroundColor: separatorColor, height: separatorHeight }]} />
                        </View>
                    )}
                </React.Fragment>
            ))}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        width: "100%",
    },
    itemContainer: {
        flex: 1, // Ensures all items are distributed equally taking up available space
        alignItems: "center",
        justifyContent: "center",
    },
    separatorContainer: {
        paddingHorizontal: 8, // 8px gap on both sides of the line
        justifyContent: "center",
        alignItems: "center",
    },
    separator: {
        width: 1,
        height: 35,
    },
    topTextWrapper: {
        flexDirection: "row",
        alignItems: "center",
        gap: 4,
    },
    topText: {
        fontFamily: Fonts.bold,
        marginBottom: 2,
    },
    bottomText: {
        fontFamily: Fonts.regular,
    },
});
