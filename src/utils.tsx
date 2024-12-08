import { Line } from "react-native-svg";
import React from "react";

export const clamp = (value: number, min: number, max: number): number =>
  Math.min(Math.max(value, min), max);

export const renderTicks = (
  tickCount: number,
  baseY: number,
  barHeight: number,
  maxTemperature: number,
  temperature: number,
  tickColor: string,
  highlightedTickColor: string
) => {
  return Array.from({ length: tickCount - 1 }, (_, index) => {
    const y = baseY - (index * barHeight) / (tickCount - 1);
    const isMajorTick = index % 2 === 0;
    const isHighlighted =
      temperature >= (index * maxTemperature) / (tickCount - 1);

    return (
      <Line
        key={index}
        x1={isMajorTick ? "53" : "57"}
        y1={y}
        x2="65"
        y2={y}
        stroke={isHighlighted ? highlightedTickColor : tickColor}
        strokeWidth="3"
      />
    );
  });
};
