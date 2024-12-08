import React, { useRef, useEffect } from "react";
import { View, StyleSheet, Animated, Easing } from "react-native";
import Svg, { Rect, Circle } from "react-native-svg";
import { ThermometerProps } from "./types";
import { clamp, renderTicks } from "./utils";

const AnimatedRect = Animated.createAnimatedComponent(Rect);

const Thermometer: React.FC<ThermometerProps> = ({
  temperature,
  maxTemperature = 50,
  width = 150,
  height = 300,
  style,
  fillColor = "#EF3024",
  backgroundColor = "#fff",
  tickColor = "#A9A9A9",
  highlightedTickColor = "#FFFFFF",
  borderColor = "#E6EAF4",
}) => {
  const BAR_HEIGHT = 180;
  const BASE_Y = 220;

  const animatedHeight = useRef(
    new Animated.Value((temperature / maxTemperature) * BAR_HEIGHT)
  ).current;

  useEffect(() => {
    const clampedTemperature = clamp(temperature, 0, maxTemperature);
    const targetHeight = (clampedTemperature / maxTemperature) * BAR_HEIGHT;

    Animated.timing(animatedHeight, {
      toValue: targetHeight,
      duration: 400,
      easing: Easing.ease,
      useNativeDriver: false,
    }).start();
  }, [animatedHeight, temperature, maxTemperature]);

  const animatedY = animatedHeight.interpolate({
    inputRange: [0, BAR_HEIGHT],
    outputRange: [BASE_Y, BASE_Y - BAR_HEIGHT],
  });

  return (
    <View style={[styles.container, style]}>
      <Svg width={width} height={height} viewBox="0 0 150 300">
        <Rect
          x="28"
          y="35"
          width="45"
          height="190"
          fill="none"
          stroke={borderColor}
          strokeWidth="8"
          rx="12"
        />
        <Circle cx="50" cy="250" r="50" fill={borderColor} />
        <Rect
          x="33"
          y="40"
          width="35"
          height="180"
          fill={backgroundColor}
          rx="10"
        />
        <AnimatedRect
          x="37"
          y={animatedY as unknown as string}
          width="26"
          height={animatedHeight as unknown as string}
          fill={fillColor}
          rx="2"
        />
        {renderTicks(
          10,
          BASE_Y,
          BAR_HEIGHT,
          maxTemperature,
          temperature,
          tickColor,
          highlightedTickColor
        )}
        <Rect x="37" y="210" width="26" height="30" fill={fillColor} />
        <Circle cx="50" cy="250" r="40" fill={fillColor} />
      </Svg>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "transparent",
  },
});

export default Thermometer;
