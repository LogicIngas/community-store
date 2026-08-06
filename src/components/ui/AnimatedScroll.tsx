import React, { useRef, ReactNode } from "react";
import {
  Animated,
  ScrollViewProps,
  StyleSheet,
} from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import SystemBars from "./SystemBars";

const AnimatedKeyboardAwareScrollView = Animated.createAnimatedComponent(KeyboardAwareScrollView as any);

interface AnimatedScrollProps extends ScrollViewProps {
  children: ReactNode;
  showSystemBars?: boolean;
}

export default function AnimatedScroll({
  children,
  showSystemBars = true,
  contentContainerStyle,
  ...props
}: AnimatedScrollProps) {
  const scrollY = useRef(new Animated.Value(0)).current;
  const insets = useSafeAreaInsets();

  const topOpacity = scrollY.interpolate({
    inputRange: [0, 50],
    outputRange: [0, 0.95],
    extrapolate: "clamp",
  });

  return (
    <>
      {showSystemBars && <SystemBars blur={true} topOpacity={topOpacity} />}

      <AnimatedKeyboardAwareScrollView
        enableOnAndroid={true}
        extraHeight={40}
        extraScrollHeight={20}
        keyboardShouldPersistTaps="handled"
        showsVerticalScrollIndicator={false}
        bounces={true}
        alwaysBounceVertical={true}
        onScroll={Animated.event(
          [{ nativeEvent: { contentOffset: { y: scrollY } } }],
          { useNativeDriver: false },
        )}
        scrollEventThrottle={16}
        contentContainerStyle={StyleSheet.flatten([
          { paddingBottom: insets.bottom + 15 },
          contentContainerStyle,
        ])}
        {...props}
      >
        {children}
      </AnimatedKeyboardAwareScrollView>
    </>
  );
}
