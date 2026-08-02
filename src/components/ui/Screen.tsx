import { ReactNode, useCallback } from "react";
import { Platform, StyleProp, StyleSheet, ViewStyle } from "react-native";
import { StatusBar } from "expo-status-bar";
import * as NavigationBar from "expo-navigation-bar";
import { Edge, SafeAreaView } from "react-native-safe-area-context";
import { useFocusEffect } from "@react-navigation/native";

import { Colors } from "../../theme";

type ScreenProps = {
    children: ReactNode;
    statusBar?: "light" | "dark";
    backgroundColor?: string;
    edges?: Edge[];
    style?: StyleProp<ViewStyle>;
    hideNavigationBar?: boolean;
};

export default function Screen({
    children,
    statusBar = "dark",
    backgroundColor = Colors.mainBackground,
    edges = ["top", "left", "right"],
    style,
    hideNavigationBar = false,
}: ScreenProps) {

    useFocusEffect(
        useCallback(() => {
            if (Platform.OS !== "android") return;

            NavigationBar.setButtonStyleAsync(
                statusBar === "light" ? "light" : "dark"
            );

            if (hideNavigationBar) {
                NavigationBar.setVisibilityAsync("hidden");
            } else {
                NavigationBar.setVisibilityAsync("visible");
            }
        }, [statusBar, hideNavigationBar])
    );

    return (
        <>
            <StatusBar
                style={statusBar}
                translucent
                backgroundColor="transparent"
            />

            <SafeAreaView
                edges={edges}
                style={[
                    styles.container,
                    { backgroundColor },
                    style,
                ]}
            >
                {children}
            </SafeAreaView>
        </>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});