import React, { useRef, ReactNode } from "react";
import { Animated, ScrollViewProps } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import SystemBars from "./SystemBars";

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
    inputRange: [0, 60],
    outputRange: [0, 1],
    extrapolate: "clamp",
  });

  return (
    <>
      {showSystemBars && <SystemBars blur={true} topOpacity={topOpacity} />}

      <Animated.ScrollView
        showsVerticalScrollIndicator={false}
        bounces={true}
        alwaysBounceVertical={true}
        onScroll={Animated.event(
          [{ nativeEvent: { contentOffset: { y: scrollY } } }],
          { useNativeDriver: false },
        )}
        scrollEventThrottle={16}
        contentContainerStyle={[
          contentContainerStyle,
          { paddingBottom: insets.bottom + 20 },
        ]}
        {...props}
      >
        {children}
      </Animated.ScrollView>
    </>
  );
}
