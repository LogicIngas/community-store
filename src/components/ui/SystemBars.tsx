import React from "react";
import { StyleSheet, View, Animated } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { BlurView } from "expo-blur";
import { Colors } from "../../theme";

type SystemBarsProps = {
    variant?: "light" | "dark";
    blur?: boolean;
    topOpacity?: any;
};

export default function SystemBars({
    variant = "light",
    blur = true,
    topOpacity,
}: SystemBarsProps) {
    const insets = useSafeAreaInsets();

    const isLight = variant === "light";

    return (
        <>
            {/* Status Bar */}
            <Animated.View
                pointerEvents="none"
                style={[
                    styles.bar,
                    styles.top,
                    {
                        height: insets.top,
                        opacity: topOpacity ?? 1,
                    },
                ]}
            >
                {blur && (
                    <BlurView
                        intensity={isLight ? 70 : 20}
                        tint={isLight ? "light" : "dark"}
                        style={StyleSheet.absoluteFill}
                    />
                )}
                <View 
                  style={[
                    StyleSheet.absoluteFill, 
                    { backgroundColor: isLight ? 'rgba(250, 247, 242, 0.75)' : 'rgba(0, 0, 0, 0.18)' }
                  ]} 
                />
            </Animated.View>

            {/* Navigation Bar / Home Indicator */}
            <View
                pointerEvents="none"
                style={[
                    styles.bar,
                    styles.bottom,
                    {
                        height: insets.bottom,
                        backgroundColor: isLight ? Colors.mainBackground : 'transparent',
                    },
                ]}
            >
              {!isLight && (
                  <View 
                    style={[
                      StyleSheet.absoluteFill, 
                      { backgroundColor: 'rgba(0, 0, 0, 0.18)' }
                    ]} 
                  />
              )}
            </View>
        </>
    );
}

const styles = StyleSheet.create({
    bar: {
        position: "absolute",
        left: 0,
        right: 0,
        zIndex: 100,
    },
    top: {
        top: 0,
    },
    bottom: {
        bottom: 0,
    },
});